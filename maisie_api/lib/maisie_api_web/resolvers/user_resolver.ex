defmodule MaisieApiWeb.Resolvers.UserResolver do
    alias MaisieApi.Accounts

    def user(_, _, %{context: %{current_user: current_user}}) do
        {:ok, Accounts.get_user!(current_user.id)};
    end

    def users(_,_, %{context: _context}) do
        {:ok, Accounts.list_users()}
    end

    def register_user(_, %{input: input}, _) do
        Accounts.create_user(input)
        |> handler()
    end

    defp handler({:error, %Ecto.Changeset{} = changeset}) do
        format_errors(changeset.errors)
    end

    defp handler(response) do
        response
    end

    defp format_errors([email: {"has already been taken", _}]) do
        {:error, %{message: "email", details: "EMAIL HAS ALREADY BEEN TAKEN"}}
    end
end