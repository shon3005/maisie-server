defmodule MaisieApi.Services.Request do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.User
  alias MaisieApi.Services.Circle

  schema "requests" do
    belongs_to :circle, Circle
    belongs_to :user, User

    timestamps()
  end

  def changeset(request, attrs) do
    request
    |> cast(attrs, [:user_id, :circle_id])
    |> validate_required([
      :user_id,
      :circle_id
    ])
  end
end