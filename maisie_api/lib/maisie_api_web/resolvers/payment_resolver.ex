defmodule MaisieApiWeb.Resolvers.PaymentResolver do
    alias MaisieApi.{Accounts, Guardian}

    def create_customer(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Stripe.Customer.create(%{
            "email": current_user.email,
            "source": input.source
        })
        |> handler(current_user)
    end

    def update_customer(_, %{input: input}, %{context: %{current_user: current_user}}) do
        # Stripe.Customer.retrieve(current_user.stripe_id)
        Stripe.Customer.update(current_user.stripe_id, %{
            "email": current_user.email,
            "source": input.source
        })
        |> update_handler(current_user)
    end

    def set_up_payments(_, _, %{context: %{current_user: current_user}}) do
        url = %{
            state: UUID.uuid4(:hex),
            client_id: System.get_env("STRIPE_CLIENT_ID"),
            stripe_user: %{
                "email" => current_user.email,
                "business_type" => "individual",
                "first_name" => current_user.first_name,
                "last_name" => current_user.last_name
            }
        }
        |> Stripe.Connect.OAuth.authorize_url()
        |> String.replace("https://connect.stripe.com/", "https://connect.stripe.com/express/")
        {:ok, url}
    end

    def sync_payment_account(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Stripe.Connect.OAuth.token(input.code)
        |> handler(current_user)
    end

    defp update_handler({ :ok, %Stripe.Customer{ id: id, sources: %Stripe.List{ data: [ %Stripe.Source{ card: %{ last4: last4 } } | _tail ] } } } = response, current_user) do
        # updated_user = Map.put(current_user, :last4, last4)
        Accounts.update_payment(current_user, %{last4: last4})
        # {:ok, updated_user}
    end

    defp update_handler({:error, %Stripe.Error{} = error}, current_user) do
        format_errors(error)
    end

    defp handler({:ok, %Stripe.Customer{ id: stripe_id, sources: %Stripe.List{ data: [ %Stripe.Source{ card: %{ last4: last4 } } | _tail ] } } } = response, current_user) do
        Accounts.update_payment(current_user, %{stripe_id: stripe_id, last4: last4})
        # updated_user = Map.put(current_user, :last4, last4)
        # {:ok, updated_user}
    end

    defp handler({:error, %Stripe.Error{} = error}, current_user) do
        format_errors(error)
    end

    defp format_errors(%Stripe.Error{ extra: %{ http_status: status }, message: message } = error) do
        {:error, %{message: status, details: message}}
    end
end