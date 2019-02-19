defmodule MaisieApiWeb.Schema.Types.SessionType do
    use Absinthe.Schema.Notation
    use Absinthe.Ecto, repo: MaisieApi.Repo
    
    object :user_type do
        field(:id, :id)
        field(:first_name, :string)
        field(:last_name, :string)
        field(:email, :string)
        field(:role, :string)
        field(:image_url, :string)
        field(:phone, :string)
        field(:neighborhood, :string)
        field(:school, :string)
        field(:work, :string)
        field(:bio, :string)
        field(:circles, list_of(:circle_type), resolve: assoc(:circle))
        field(:host, :host_type, resolve: assoc(:host))
    end

    object :session_type do
        field(:token, :string)
        field(:user, :user_type)
    end

    input_object :session_input_type do
        field(:email, non_null(:string))
        field(:password, non_null(:string))
    end
end