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

    defp handler({:error, %Ecto.Changeset{} = changeset}) do
        format_errors(changeset.errors)
    end

    defp handler(response) do
        response
    end

    defp format_errors([user_id: {"has already been taken", _}]) do
        {:error, %{message: "user_id", details: "HOST IS ALREADY ASSOCIATED WITH USER"}}
    end
end