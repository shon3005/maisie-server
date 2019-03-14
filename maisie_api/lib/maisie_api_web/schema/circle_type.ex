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
        field(:hour, :string)
        field(:minute, :string)
        field(:ampm, :string)
        field(:length, :string)
        field(:neighborhood, :string)
        field(:address, :string)
        field(:location_type, :string)
        field(:min, :string)
        field(:max, :string)
        field(:start_date, :datetime)
        field(:tags, list_of(:string))
        field(:who_should_join, :string)
        field(:image_url, :string)
        field(:user, :user_type, resolve: assoc(:user))
        field(:requests, list_of(:request_type), resolve: assoc(:requests))
        field(:members, list_of(:member_type), resolve: assoc(:members))
    end

    object :request_type do
        field(:id, :id)
        field(:user, :user_type, resolve: assoc(:user))
        field(:circle, :circle_type, resolve: assoc(:circle))
    end

    object :member_type do
        field(:id, :id)
        field(:user, :user_type, resolve: assoc(:user))
        field(:circle, :circle_type, resolve: assoc(:circle))
    end

    input_object :circle_input_type do
        field(:title, :string)
        field(:description, :string)
        field(:price, :string)
        field(:frequency, :string)
        field(:hour, :string)
        field(:minute, :string)
        field(:ampm, :string)
        field(:length, :string)
        field(:neighborhood, :string)
        field(:address, :string)
        field(:location_type, :string)
        field(:min, :string)
        field(:max, :string)
        field(:tags, :string)
        field(:who_should_join, :string)
        field(:start_date, :datetime)
        field(:host_id, :id)
    end

    input_object :circle_get_type do
        field(:id, non_null(:id))
    end

    input_object :request_input_type do
        field(:circle_id, :id)
        field(:host_id, :id)
    end

    input_object :member_input_type do
        field(:circle_id, :id)
        field(:request_id, :id)
        field(:user_id, :id)
        field(:host_id, :id)
    end

    input_object :question_input_type do
        field(:circle_id, :id)
        field(:description, :string)
    end
end