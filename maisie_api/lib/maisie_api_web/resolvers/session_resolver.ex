defmodule MaisieApiWeb.Resolvers.SessionResolver do
    alias MaisieApi.{Accounts, Guardian}

    def login_user(_, %{input: input}, _) do
        with {:ok, user} <- Accounts.Session.authenticate(input),
            {:ok, jwt_token, _} <- Guardian.encode_and_sign(user) do
            IO.inspect user
            {:ok, %{token: jwt_token, user: user}}
        end
    end
end