defmodule MaisieApiWeb.Resolvers.UserResolver do
    alias MaisieApi.{Accounts, Guardian}

    def user(_, _, %{context: %{current_user: current_user}}) do
        Accounts.get_user(current_user.id)
        |> get_user_handler()
    end

    def get_user_by_id(_, %{user_id: user_id}, _) do
        Accounts.get_user(user_id)
        |> get_user_handler()
    end

    def users(_,_, %{context: _context}) do
        {:ok, Accounts.list_users()}
    end

    def register_user(_, %{input: input}, _) do
        Accounts.create_user(input)
        |> handler(input)
    end

    def update_user(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Accounts.update_user(current_user, input)
        |> update_user_handler()
    end

    def update_user_password(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Accounts.update_user_password(current_user, input)
        |> update_user_password_handler()
    end

    def update_user_support(_, %{input: input}, %{context: %{current_user: current_user}}) do
        Accounts.update_user_support(current_user, input)
        |> update_user_support_handler()
    end

    defp get_user_handler({:error, %Ecto.Changeset{} = changeset}) do
        {:error, %{message: "get-user", details: "USER NOT FOUND"}}
    end

    defp get_user_handler(response) do
        {:ok, response}
    end

    defp update_user_handler({:error, %Ecto.Changeset{} = changeset}) do
        {:error, %{message: "update-user", details: "UPDATE USER FAILED"}}
    end

    defp update_user_handler({:ok, %MaisieApi.Accounts.User{} = user} = response) do
        {:ok, %{user: user}}
    end

    defp update_user_password_handler({:error, %Ecto.Changeset{} = changeset}) do
        {:error, %{message: "update-user", details: "UPDATE USER PASSWORD FAILED"}}
    end

    defp update_user_password_handler({:ok, %MaisieApi.Accounts.User{} = user} = response) do
        {:ok, "UPDATE USER PASSWORD SUCCESS"}
    end

    defp update_user_support_handler({:error, %Ecto.Changeset{} = changeset}) do
        {:error, %{message: "update-user-support", details: "UPDATE USER SUPPORT FAILED"}}
    end

    defp update_user_support_handler({:ok, %MaisieApi.Accounts.User{} = user} = response) do
        {:ok, user}
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