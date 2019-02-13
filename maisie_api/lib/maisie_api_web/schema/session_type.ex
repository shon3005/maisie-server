defmodule MaisieApiWeb.Schema.Types.SessionType do
    use Absinthe.Schema.Notation

    object :user_type do
        field(:id, :id)
        field(:first_name, :string)
        field(:last_name, :string)
        field(:email, :string)
        field(:role, :string)
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