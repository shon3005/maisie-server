defmodule MaisieApiWeb.Resolvers.CircleResolver do
    alias MaisieApi.Accounts
    alias MaisieApi.Accounts.{Member}
    alias MaisieApi.Services
    alias MaisieApi.Services.{Request}

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

    def accept_request(_, %{input: %{request_id: request_id, user_id: user_id, circle_id: circle_id, host_id: host_id}}, _) do
        Map.merge(%{}, %{user_id: user_id, circle_id: circle_id})
        |> Accounts.create_member()

        Services.get_request_by_id(request_id)
        |> Services.delete_request()

        {:ok, Accounts.get_user(host_id)}
    end

    def deny_request(_, %{request_id: request_id, host_id: host_id}, _) do
        Services.get_request_by_id(request_id)
        |> Services.delete_request()

        {:ok, Accounts.get_user(host_id)}
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