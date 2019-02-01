defmodule MaisieApiWeb.Schema.Types.HostType do
    use Absinthe.Schema.Notation
    use Absinthe.Ecto, repo: MaisieApi.Repo

    object :host_type do
        field(:id, :id)
        field(:education, :string)
        field(:description, :string)
        field(:image_url, :string)
        field(:license, :string)
        field(:user, :user_type, resolve: assoc(:user))
    end

    input_object :host_input_type do
        field(:education, :string)
        field(:description, :string)
        field(:image_url, :string)
        field(:license, :string)
    end
end