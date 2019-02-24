defmodule MaisieApiWeb.Resolvers.HostResolver do
    alias MaisieApi.Accounts

    def users(_,_, %{context: _context}) do
        {:ok, Accounts.list_hosts()}
    end

    def register_host(_, %{input: input}, %{context: %{current_user: current_user}}) do
        host_input = Map.merge(input, %{user_id: current_user.id})
        Accounts.create_host(host_input)
        |> handler()
    end

    def update_host(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Accounts.update_host(Accounts.get_host!(input.id), input)
        |> update_host_handler()
    end

    def get_transactions(_, %{host_id: host_id}, %{context: %{current_user: current_user}}) do
        Accounts.get_host!(host_id)
        |> list_transfers()
    end

    def host_payout(_, %{host_id: host_id}, _current_user) do
        Accounts.get_host!(host_id)
        |> retrieve_balance()
    end

    def host_stripe_dashboard_url(_, %{host_id: host_id}, %{context: %{current_user: current_user}}) do
        Accounts.get_host!(host_id)
        |> create_account_link()
    end

    defp list_transfers(%Accounts.Host{stripe_id: stripe_id} = host) do
        {:ok,
        %{"available" => [%{"amount" => balance}],
        "pending" => [%{"amount" => pending_balance}]}} = Stripe.API.request(%{}, :get, "balance", %{}, connect_account: stripe_id)
        {:ok, url} = create_account_link(host)
        Stripe.Transfer.list(%{destination: stripe_id, limit: 5})
        |> transfer_handler(balance, url)
    end

    defp retrieve_balance(%Accounts.Host{stripe_id: stripe_id}) do
        Stripe.API.request(%{}, :get, "balance", %{}, connect_account: stripe_id)
        |> create_payout(stripe_id)
    end

    defp create_payout({:ok, %{"available" => [%{"amount" => balance}], "pending" => [%{"amount" => pending_balance}]}}, stripe_id) do
        Stripe.Payout.create(%{
            amount: balance,
            currency: "usd"
        },
            connect_account: stripe_id
        )
        |> payout_handler()
    end

    defp create_account_link(%Accounts.Host{stripe_id: stripe_id}) do
        Stripe.Account.create_login_link(stripe_id, %{})
        |> dashboard_url_handler()
    end

    defp payout_handler({:ok, %Stripe.Payout{}}) do
        {:ok, "payout success"}
    end

    defp payout_handler({:error, %Stripe.Error{} = error}) do
        {:error, error.message}
    end

    defp dashboard_url_handler({:error, %Stripe.Error{} = error}) do
        {:error, error.message}
    end

    defp dashboard_url_handler({:ok, %{url: url}}) do
        {:ok, url}
    end

    defp transfer_handler({:error, %Stripe.Error{} = error}, _balance, _url) do
        {:error, error.message}
    end

    defp transfer_handler({:ok, %Stripe.List{data: transactions}}, balance, url) do
        new_transactions = Enum.map(transactions, fn transfer -> %{
            amount: transfer.amount,
            date: transfer.created,
            circle_name: transfer.metadata["circle"]
        } end)

        transfers = %{
            balance: balance,
            transactions: new_transactions,
            url: url
        }

        {:ok, transfers}
    end

    defp handler({:error, %Ecto.Changeset{} = changeset}) do
        format_errors(changeset.errors)
    end

    defp handler(response) do
        response
    end

    defp update_host_handler({:error, %Ecto.Changeset{} = changeset}) do
        {:error, %{message: "update-host", details: "UPDATE HOST FAILED"}}
    end

    defp update_host_handler({:ok, %MaisieApi.Accounts.Host{} = host} = response) do
        {:ok, host}
    end

    defp format_errors([user_id: {"has already been taken", _}]) do
        {:error, %{message: "user_id", details: "HOST IS ALREADY ASSOCIATED WITH USER"}}
    end
end