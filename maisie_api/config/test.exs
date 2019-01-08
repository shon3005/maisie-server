use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :maisie_api, MaisieApiWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
# config :maisie_api, MaisieApi.Repo,
#   username: "postgres",
#   password: "postgres",
#   database: "maisie_api_test",
#   hostname: "localhost",
#   pool: Ecto.Adapters.SQL.Sandbox

# Configure your database
config :maisie_api, MaisieApi.Repo,
  username: "postgres",
  password: "postgres_password",
  database: "maisie_api_test",
  hostname: "localhost",
  port: 5432,
  pool: Ecto.Adapters.SQL.Sandbox