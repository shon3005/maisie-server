defmodule MaisieApi.Services.Circle do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.User

  schema "circles" do
    field :description, :string
    field :name, :string
    field :price, :float
    field :day, :string
    field :time, :string
    field :duration, :integer
    field :program_length, :integer
    field :start, :utc_datetime
    field :end, :utc_datetime
    field :space_type, :string
    field :location, :string
    belongs_to :user, User

    timestamps()
  end

  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :description, :price, :day, :time, :duration, :program_length, :start, :end, :space_type, :location, :user_id])
    |> validate_required([
      :name,
      :description,
      :price,
      :day,
      :time,
      :duration,
      :program_length,
      :start,
      :end,
      :space_type,
      :location,
      :user_id
    ])
  end
end