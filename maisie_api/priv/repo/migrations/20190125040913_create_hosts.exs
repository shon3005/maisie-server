defmodule MaisieApi.Repo.Migrations.CreateHosts do
  use Ecto.Migration

  def change do
    create table(:hosts) do
      add :first_name, :string
      add :last_name, :string
      add :license, :string
      add :education, :string
      add :description, :text
      add :image_url, :string
      add :stripe_id, :string
      add :has_stripe_account, :boolean
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create unique_index(:hosts, [:user_id])
  end
end
