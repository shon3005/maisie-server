defmodule MaisieApiWeb.Resolvers.CircleResolver do
    alias MaisieApi.Services

    def create_circle(_, %{input: input}, %{context: %{current_user: current_user}}) do
        circle_input = Map.merge(input, %{user_id: current_user.id})
        Services.create_circle(circle_input)
    end

    def get_circle_by_id(_, %{input: input}, _) do
        {:ok, Services.get_circle!(input.id)}
    end

    def circles(_,_,%{context: _context}) do
        {:ok, Services.list_circles()}
    end
end