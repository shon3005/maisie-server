defmodule MaisieApi.Repo.Migrations.CreateRequests do
  use Ecto.Migration

  def change do
    create table(:requests) do
      add :user_id, references(:users, on_delete: :delete_all)
      add :circle_id, references(:circles, on_delete: :delete_all)

      timestamps()
    end

    create index(:requests, [:circle_id])
  end
end
