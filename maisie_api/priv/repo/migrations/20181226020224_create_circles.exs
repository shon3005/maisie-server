defmodule MaisieApi.Repo.Migrations.CreateCircles do
  use Ecto.Migration

  def change do
    create table(:circles) do
      add :name, :string
      add :description, :text
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:circles, [:user_id])
  end
end
