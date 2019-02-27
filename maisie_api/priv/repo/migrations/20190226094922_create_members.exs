defmodule MaisieApi.Repo.Migrations.CreateMembers do
  use Ecto.Migration

  def change do
    create table(:members) do
      add :user_id, references(:users, on_delete: :delete_all)
      add :circle_id, references(:circles, on_delete: :delete_all)

      timestamps()
    end

    create index(:members, [:circle_id])
  end
end