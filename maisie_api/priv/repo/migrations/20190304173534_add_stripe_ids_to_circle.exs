defmodule MaisieApi.Repo.Migrations.AddStripeIdsToCircle do
  use Ecto.Migration

  def change do
    alter table(:circles) do
      add :stripe_product_id, :string
      add :stripe_plan_id, :string
    end
  end
end
