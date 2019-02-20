defmodule MaisieApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias MaisieApi.Accounts.Host
  alias MaisieApi.Services.Circle

  schema "users" do
    field :email, :string, unique: true
    field :first_name, :string
    field :last_name, :string
    field :password_hash, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true
    field :old_password, :string, virtual: true
    field :last4, :string
    field :role, :string, default: "user"
    field :image_url, :string
    field :phone, :string
    field :neighborhood, :string
    field :school, :string
    field :work, :string
    field :bio, :string
    field :stripe_id, :string, unique: true
    has_one :host, Host
    has_many :circles, Circle

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :password, :password_confirmation, :role])
    |> validate_required([
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation,
      :role,
    ])
    |> validate_format(:email, ~r/@/)
    |> update_change(:email, &String.downcase(&1))
    |> validate_length(:password, min: 6, max: 100)
    |> validate_confirmation(:password)
    |> unique_constraint(:email)
    |> hash_password
  end

  def update_user_changeset(user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :phone, :neighborhood, :school, :work, :bio])
    |> validate_required([
      :first_name,
      :last_name,
      :email,
    ])
    |> validate_format(:email, ~r/@/)
    |> update_change(:email, &String.downcase(&1))
    |> unique_constraint(:email)
  end

  def update_user_password_changeset(user, attrs) do
    user
    |> cast(attrs, [:old_password, :password, :password_confirmation])
    |> validate_required([
      :old_password,
      :password,
      :password_confirmation
    ])
    |> validate_length(:password, min: 6, max: 100)
    |> validate_confirmation(:password)
    |> validate_old_password(user)
    |> hash_password
  end

  def update_user_image_changeset(user, attrs) do
    user
    |> cast(attrs, [:image_url])
  end

  def update_payment_changeset(user, attrs) do
    user
    |> cast(attrs, [:stripe_id, :last4])
  end

  defp validate_old_password(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset, user) do
    Comeonin.Argon2.check_pass(user, password)
    changeset
  end

  defp validate_old_password(changeset, _user) do
    changeset
  end

  defp hash_password(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Argon2.add_hash(password))
  end

  defp hash_password(changeset) do
    changeset
  end
end
