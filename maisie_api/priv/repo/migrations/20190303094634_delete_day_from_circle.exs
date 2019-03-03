defmodule MaisieApi.Repo.Migrations.DeleteDayFromCircle do
  use Ecto.Migration

  def change do
    alter table(:circles) do
      remove :day
    end
  end
end
