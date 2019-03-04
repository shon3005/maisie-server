defmodule MaisieApiWeb.Schema.Types.SharedType do
    use Absinthe.Schema.Notation
    use Absinthe.Ecto, repo: MaisieApi.Repo

    object :user_and_circle_type do
        field(:user, :user_type)
        field(:circle, :circle_type)
    end

    input_object :user_and_circle_get_type do
        field(:user_id, :id)
        field(:circle_id, non_null(:id))
    end
end