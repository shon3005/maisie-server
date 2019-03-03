defmodule MaisieApi.Repo.Migrations.AddStartDateToCircle do
  use Ecto.Migration

  def change do
    alter table(:circles) do
      add :start_date, :utc_datetime
    end
  end
end
