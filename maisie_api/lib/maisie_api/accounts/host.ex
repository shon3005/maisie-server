defmodule MaisieApi.Accounts.Host do
  use Ecto.Schema
  import Ecto.Changeset
  alias MaisieApi.Accounts.User


  schema "hosts" do
    field :description, :string
    field :education, :string
    field :image_url, :string
    field :license, :string
    field :stripe_id, :string, unique: true
    field :has_stripe_account, :boolean
    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(host, attrs) do
    host
    |> cast(attrs, [:license, :education, :description, :image_url, :user_id])
    |> validate_required([:license, :education, :description, :image_url, :user_id])
    |> unique_constraint(:user_id)
  end

  def update_host_image_changeset(host, attrs) do
    host
    |> cast(attrs, [:image_url])
  end

  def update_host_payment_changeset(host, attrs) do
    host
    |> cast(attrs, [:stripe_id, :has_stripe_account])
  end
end
