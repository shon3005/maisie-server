defmodule MaisieApi.Services.Circle do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.{User, Member}
  alias MaisieApi.Services.{Question, Request}

  schema "circles" do
    field :title, :string
    field :description, :string
    field :price, :string
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
    field :start_date, :utc_datetime
    field :stripe_product_id, :string
    field :stripe_plan_id, :string
    field :subscription, :boolean
    belongs_to :user, User
    has_many :questions, Question
    has_many :requests, Request
    has_many :members, Member

    timestamps()
  end

  def changeset(circle, attrs) do
    circle
    |> cast(attrs, [:title, :description, :price, :frequency, :length, :location_type, :neighborhood, :address, :hour, :minute, :ampm, :min, :max, :tags, :start_date, :who_should_join, :user_id, :stripe_product_id, :stripe_plan_id, :subscription])
    |> validate_required([
      :title,
      :description,
      :price,
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
      :start_date,
      :who_should_join,
      :user_id,
      :subscription
    ])
  end

  def update_circle_changeset(circle, attrs) do
    circle
    |> cast(attrs, [:image_url])
  end
end