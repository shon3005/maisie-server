defmodule MaisieApiWeb.Schema.Types.UserType do
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
        field(:last4, :string)
        field(:support, :string)
        field(:host, :host_type, resolve: assoc(:host))
        field(:circles, list_of(:circle_type), resolve: assoc(:circles))
        field(:requests, list_of(:request_type), resolve: assoc(:requests))
        field(:members, list_of(:member_type), resolve: assoc(:members))
    end

    object :user_update_response_type do
        field(:user, :user_type)
    end

    input_object :user_input_type do
        field(:first_name, non_null(:string))
        field(:last_name, non_null(:string))
        field(:email, non_null(:string))
        field(:password, non_null(:string))
        field(:password_confirmation, non_null(:string))
    end

    input_object :user_update_type do
        field(:first_name, non_null(:string))
        field(:last_name, non_null(:string))
        field(:email, non_null(:string))
        field(:phone, :string)
        field(:neighborhood, :string)
        field(:school, :string)
        field(:work, :string)
        field(:bio, :string)
        field(:host_id, :id)
    end

    input_object :host_update_type do
        field(:first_name, non_null(:string))
        field(:last_name, non_null(:string))
        field(:host_id, non_null(:id))
    end

    input_object :user_update_password_type do
        field(:old_password, non_null(:string))
        field(:password, non_null(:string))
        field(:password_confirmation, non_null(:string))
    end

    input_object :user_support_type do
        field(:phone, :string)
        field(:support, non_null(:boolean))
    end
end