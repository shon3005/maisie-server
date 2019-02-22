defmodule MaisieApi.Services.Circle do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.User

  schema "circles" do
    field :title, :string
    field :description, :string
    field :price, :string
    field :day, :string
    field :frequency, :string
    field :length, :string
    field :location_type, :string
    field :neighborhood, :string
    field :address, :string
    field :hour, :string
    field :minute, :string
    field :ampm, :string
    field :min, :string
    field :max, :string
    field :image_url, :string
    field :who_should_join, :string
    field :tags, {:array, :string}
    belongs_to :user, User

    timestamps()
  end

  def changeset(circle, attrs) do
    circle
    |> cast(attrs, [:title, :description, :price, :day, :frequency, :length, :location_type, :neighborhood, :address, :hour, :minute, :ampm, :min, :max, :tags, :who_should_join, :user_id])
    |> validate_required([
      :title,
      :description,
      :price,
      :day,
      :frequency,
      :length,
      :location_type,
      :neighborhood,
      :address,
      :hour,
      :minute,
      :ampm,
      :min,
      :max,
      :tags,
      :who_should_join,
      :user_id
    ])
  end

  def update_circle_changeset(circle, attrs) do
    circle
    |> cast(attrs, [:image_url])
  end
end