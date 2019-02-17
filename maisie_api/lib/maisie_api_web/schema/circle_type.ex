defmodule MaisieApiWeb.Schema.Types.CircleType do
    use Absinthe.Schema.Notation
    use Absinthe.Ecto, repo: MaisieApi.Repo
    import_types Absinthe.Type.Custom
    # import_types Absinthe.Plug.Types

    object :circle_type do
        field(:id, :id)
        field(:title, :string)
        field(:description, :string)
        field(:price, :string)
        field(:frequency, :string)
        field(:day, :string)
        field(:hour, :string)
        field(:minute, :string)
        field(:ampm, :string)
        field(:length, :string)
        field(:neighborhood, :string)
        field(:address, :string)
        field(:location_type, :string)
        field(:min, :string)
        field(:image_url, :string)
        field(:user, :user_type, resolve: assoc(:user))
    end

    input_object :circle_input_type do
        field(:title, :string)
        field(:description, :string)
        field(:price, :string)
        field(:frequency, :string)
        field(:day, :string)
        field(:hour, :string)
        field(:minute, :string)
        field(:ampm, :string)
        field(:length, :string)
        field(:neighborhood, :string)
        field(:address, :string)
        field(:location_type, :string)
        field(:min, :string)
    end

    input_object :circle_get_type do
        field(:id, non_null(:id))
    end
end