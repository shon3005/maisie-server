defmodule MaisieApiWeb.Resolvers.UserResolver do
    alias MaisieApi.Accounts

    def users(_,_, %{context: context}) do
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
        {:error, %{message: "email", details: "email has already been taken"}}
    end
end