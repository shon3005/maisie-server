defmodule MaisieApiWeb.Resolvers.UserResolver do
    alias MaisieApi.Accounts

    def users(_,_, %{context: context}) do
        {:ok, Accounts.list_users()}
    end

    def register_user(_, %{input: input}, _) do
        Accounts.create_user(input)
    end
end