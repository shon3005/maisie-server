defmodule MaisieApiWeb.Resolvers.SharedResolver do
    alias MaisieApi.{Accounts, Services}

    def get_user_and_circle_by_id(_, %{input: %{user_id: nil, circle_id: circle_id}}, _) do
        circle = Services.get_circle!(circle_id)
        {:ok, %{
            circle: circle
        }}
    end

    def get_user_and_circle_by_id(_, %{input: %{user_id: user_id, circle_id: circle_id}}, _) do
        user = Accounts.get_user(user_id)
        circle = Services.get_circle!(circle_id)
        {:ok, %{
            user: user,
            circle: circle
        }}
    end
end