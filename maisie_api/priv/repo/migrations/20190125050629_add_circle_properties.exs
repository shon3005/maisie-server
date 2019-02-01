defmodule MaisieApi.Repo.Migrations.AddCircleProperties do
  use Ecto.Migration

  def change do
    alter table(:circles) do
      add :price, :float
      add :day, :string
      add :time, :string
      add :duration, :integer
      add :program_length, :integer
      add :start, :utc_datetime
      add :end, :utc_datetime
      add :space_type, :string
      add :location, :string
      add :image_url, :string
    end
  end
end