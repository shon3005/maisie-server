defmodule MaisieApiWeb.Resolvers.UserResolver do
    alias MaisieApi.{Accounts, Guardian}

    def user(_, _, %{context: %{current_user: current_user}}) do
        {:ok, Accounts.get_user!(current_user.id)};
    end

    def users(_,_, %{context: _context}) do
        {:ok, Accounts.list_users()}
    end

    def register_user(_, %{input: input}, _) do
        Accounts.create_user(input)
        |> handler(input)
    end

    defp handler({:error, %Ecto.Changeset{} = changeset}, _input) do
        format_errors(changeset.errors)
    end

    defp handler(response, input) do
        proceed_login_user(input)
    end

    def proceed_login_user(input) do
        with {:ok, user} <- Accounts.Session.authenticate(input),
            {:ok, jwt_token, _} <- Guardian.encode_and_sign(user) do
            {:ok, %{token: jwt_token, user: user}} 
        end
    end

    defp format_errors([email: {"has already been taken", _}]) do
        {:error, %{message: "email", details: "EMAIL HAS ALREADY BEEN TAKEN"}}
    end
end