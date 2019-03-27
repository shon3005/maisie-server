defmodule MaisieApi.Repo.Migrations.AddSubscriptionToCircle do
  use Ecto.Migration

  def change do
    alter table(:circles) do
      add :subscription, :boolean
    end
  end
end