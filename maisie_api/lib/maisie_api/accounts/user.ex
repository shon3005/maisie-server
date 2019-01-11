defmodule MaisieApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Services.Group

  schema "users" do
    field :email, :string, unique: true
    field :first_name, :string
    field :last_name, :string
    field :zip, :string
    field :password_hash, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true
    field :role, :string, default: "user"
    has_many :groups, Group

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :password, :password_confirmation, :role, :zip])
    |> validate_required([
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation,
      :role,
      :zip
    ])
    |> validate_format(:email, ~r/@/)
    |> update_change(:email, &String.downcase(&1))
    |> validate_length(:password, min: 6, max: 100)
    |> validate_confirmation(:password)
    |> unique_constraint(:email)
    |> hash_password
  end

  defp hash_password(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Argon2.add_hash(password))
  end

  defp hash_password(changeset) do
    changeset
  end
end
