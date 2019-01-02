defmodule MaisieApi.Services.Group do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.User

  schema "groups" do
    field :description, :string
    field :name, :string
    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(group, attrs) do
    group
    |> cast(attrs, [:name, :description, :user_id])
    |> validate_required([:name, :description, :user_id])
  end
end