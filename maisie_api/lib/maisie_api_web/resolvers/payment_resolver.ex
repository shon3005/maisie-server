defmodule MaisieApiWeb.Resolvers.PaymentResolver do
    alias MaisieApi.{Accounts}

    def create_or_update_customer(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Accounts.get_user(current_user.id)
        |> user_has_stripe(%{input: input}, %{context: %{current_user: current_user}})
    end

    defp user_has_stripe(%Accounts.User{stripe_id: nil}, %{input: input}, %{context: %{current_user: current_user}}) do
       create_customer(%Accounts.User{stripe_id: nil}, %{input: input}, %{context: %{current_user: current_user}})
    end

    defp user_has_stripe(%Accounts.User{stripe_id: stripe_id}, %{input: input}, %{context: %{current_user: current_user}}) do
       update_customer(%Accounts.User{stripe_id: stripe_id}, %{input: input}, %{context: %{current_user: current_user}})
    end

    def create_customer(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Stripe.Customer.create(%{
            email: current_user.email,
            source: input.source
        })
        |> handler(current_user)
    end

    def update_customer(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Stripe.Customer.update(current_user.stripe_id, %{
            email: current_user.email,
            source: input.source
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
        |> connect_handler(current_user, input.id)
    end

    def charge_customer(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Stripe.Charge.create(%{
            amount: input.amount,
            currency: "usd",
            # customer: input.customer_id,
            destination: %{
                account: input.host_id,
                amount: trunc(input.amount - (input.amount * 0.05)),
            },
            metadata: %{
                circle: input.circle
            },
            source: "tok_bypassPending"
        })
        |> transfer_to_host(input)
        |> charge_handler(current_user)
    end

    defp transfer_to_host({:ok, %Stripe.Charge{transfer: transfer_id}}, input) do
        Stripe.Transfer.update(transfer_id, %{
            metadata: %{
                circle: input.circle
            }
        })
    end

    defp update_handler({ :ok, %Stripe.Customer{ sources: %Stripe.List{ data: [ %Stripe.Source{ card: %{ last4: last4 } } | _tail ] } } }, current_user) do
        Accounts.update_payment(current_user, %{last4: last4})
    end

    defp update_handler({:error, %Stripe.Error{} = error}, _current_user) do
        format_errors(error)
    end

    defp charge_handler({:ok, %Stripe.Transfer{}}, _current_user) do
        {:ok, "charge succeeded"}
    end

    defp charge_handler({:error, %Stripe.Error{} = error}, _current_user) do
        format_errors(error)
    end

    defp handler({:ok, %Stripe.Customer{ id: stripe_id, sources: %Stripe.List{ data: [ %Stripe.Source{ card: %{ last4: last4 } } | _tail ] } } }, current_user) do
        Accounts.update_payment(current_user, %{stripe_id: stripe_id, last4: last4})
    end

    defp handler({:error, %Stripe.Error{} = error}, _current_user) do
        format_errors(error)
    end

    defp connect_handler({:ok, %{ stripe_user_id: stripe_id }}, _current_user, host_id) do
        Stripe.Account.update(stripe_id, %{payout_schedule: %{interval: "manual"}})
        Accounts.update_host_payment(Accounts.get_host!(host_id), %{stripe_id: stripe_id, has_stripe_account: true})
    end

    defp connect_handler({:error, %Stripe.Error{} = error}, _current_user, _host_id) do
        format_errors(error)
    end

    defp format_errors(%Stripe.Error{ extra: %{ http_status: status }, message: message }) do
        {:error, %{message: status, details: message}}
    end
end