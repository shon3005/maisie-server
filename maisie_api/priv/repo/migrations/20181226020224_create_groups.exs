defmodule MaisieApi.Repo.Migrations.CreateGroups do
  use Ecto.Migration

  def change do
    create table(:groups) do
      add :name, :string
      add :description, :text
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:groups, [:user_id])
  end
end
