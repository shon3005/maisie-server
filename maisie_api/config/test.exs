use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :maisie_api, MaisieApiWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :maisie_api, MaisieApi.Repo,
  username: System.get_env("PGUSER"),
  password: System.get_env("PGPASSWORD"),
  database: System.get_env("PGDATABASE"),
  hostname: System.get_env("PGHOST"),
  port: System.get_env("PGPORT"),
  pool_size: 10,
  pool: Ecto.Adapters.SQL.Sandbox