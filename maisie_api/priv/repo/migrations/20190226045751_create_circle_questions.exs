defmodule MaisieApi.Repo.Migrations.CreateCircleQuestions do
  use Ecto.Migration

  def change do
    create table(:questions) do
      add :description, :text
      add :user_id, references(:users, on_delete: :delete_all)
      add :circle_id, references(:circles, on_delete: :delete_all)

      timestamps()
    end

    create index(:questions, [:circle_id])
  end
end
