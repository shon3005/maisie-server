defmodule MaisieApiWeb.Schema.Types.CircleType do
    use Absinthe.Schema.Notation
    use Absinthe.Ecto, repo: MaisieApi.Repo
    import_types Absinthe.Type.Custom
    # import_types Absinthe.Plug.Types

    object :circle_type do
        field(:id, :id)
        field(:name, :string)
        field(:description, :string)
        field(:user, :user_type, resolve: assoc(:user))
    end

    input_object :circle_input_type do
        field(:name, :string)
        field(:description, :string)
        field(:price, :float)
        field(:day, :string)
        field(:time, :string)
        field(:duration, :integer)
        field(:program_length, :integer)
        field(:start, :datetime)
        field(:end, :datetime)
        field(:space_type, :string)
        field(:location, :string)
    end

    input_object :circle_get_type do
        field(:id, non_null(:id))
    end
end