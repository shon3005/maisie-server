defmodule MaisieApiWeb.Resolvers.GroupResolver do
    alias MaisieApi.Services

    def create_group(_, %{input: input}, %{context: %{current_user: current_user}}) do
        group_input = Map.merge(input, %{user_id: current_user.id})
        Services.create_group(group_input)
    end
end