defmodule MaisieApi.Services.Question do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.User
  alias MaisieApi.Services.Circle

  schema "questions" do
    field :description, :string
    belongs_to :circle, Circle
    belongs_to :user, User

    timestamps()
  end

  def changeset(question, attrs) do
    question
    |> cast(attrs, [:description, :user_id, :circle_id])
    |> validate_required([
      :description,
      :user_id,
      :circle_id
    ])
  end
end