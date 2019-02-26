defmodule MaisieApiWeb.Resolvers.CircleResolver do
    alias MaisieApi.Services

    def create_circle(_, %{input: input}, %{context: %{current_user: current_user}}) do
        input = Map.replace(input, :tags, String.split(input.tags, ", "))
        circle_input = Map.merge(input, %{user_id: current_user.id})
        Services.create_circle(circle_input)
    end

    def create_question(_, %{input: input}, %{context: %{current_user: current_user}}) do
        question_input = Map.merge(input, %{user_id: current_user.id })
        Services.create_question(question_input)
        {:ok, "question created"}
    end

    def create_request(_, %{input: input}, %{context: %{current_user: current_user}}) do
        request_input = Map.merge(input, %{user_id: current_user.id})
        Services.create_request(request_input)
    end

    def get_circle_by_id(_, %{input: input}, _) do
        {:ok, Services.get_circle!(input.id)}
    end

    def circles(_,_,%{context: _context}) do
        {:ok, Services.list_circles()}
    end

    def get_circles_by_user_id(_, %{user_id: user_id}, _) do
        {:ok, Services.list_circles_by_user_id(user_id)}
    end
end