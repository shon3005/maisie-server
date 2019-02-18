defmodule MaisieApi.Repo.Migrations.CreateHosts do
  use Ecto.Migration

  def change do
    create table(:hosts) do
      add :license, :string
      add :education, :string
      add :description, :text
      add :image_url, :string
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create unique_index(:hosts, [:user_id])
  end
end
