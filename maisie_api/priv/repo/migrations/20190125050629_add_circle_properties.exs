defmodule MaisieApi.Repo.Migrations.AddCircleProperties do
  use Ecto.Migration

  def change do
    alter table(:circles) do
      add :price, :string
      add :day, :string
      add :frequency, :string
      add :length, :string
      add :location_type, :string
      add :neighborhood, :string
      add :address, :string
      add :hour, :string
      add :minute, :string
      add :ampm, :string
      add :min, :string
      add :max, :string
      add :image_url, :string
      add :who_should_join, :text
      add :tags, {:array, :string}
    end
  end
end