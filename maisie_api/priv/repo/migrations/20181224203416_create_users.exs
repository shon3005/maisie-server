defmodule MaisieApi.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :first_name, :string
      add :last_name, :string
      add :email, :string
      add :password_hash, :string
      add :role, :string
      add :stripe_id, :string
      add :last4, :string
      add :image_url, :string
      add :phone, :string
      add :neighborhood, :string
      add :school, :string
      add :work, :string
      add :bio, :string
      add :support,:boolean

      timestamps()
    end

    create unique_index(:users, [:email])
  end
end
