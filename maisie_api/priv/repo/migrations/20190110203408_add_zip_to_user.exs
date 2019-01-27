defmodule MaisieApi.Repo.Migrations.AddZipToUser do
  use Ecto.Migration

  def change do
      alter table(:users) do
          add :zip, :string
      end
  end
end