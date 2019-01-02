defmodule MaisieApi.Repo do
  use Ecto.Repo,
    otp_app: :maisie_api,
    adapter: Ecto.Adapters.Postgres
end
