defmodule MaisieApiWeb.Schema.Types.GroupType do
    use Absinthe.Schema.Notation
    use Absinthe.Ecto, repo: MaisieApi.Repo

    object :group_type do
        field(:id, :id)
        field(:name, :string)
        field(:description, :string)
        field(:user, :user_type, resolve: assoc(:user))
    end

    input_object :group_input_type do
        field(:name, non_null(:string))
        field(:description, non_null(:string))
    end
end