use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :maisie_api, MaisieApiWeb.Endpoint,
  secret_key_base: "UDGI6SRGYgS5kBvGB3gXl8Wh1VRtm4Kq2dklHbff2uku5jeWix/yLm0nHtvAOViE"

# Configure your database
config :maisie_api, MaisieApi.Repo,
  username: System.get_env("PGUSER"),
  password: System.get_env("PGPASSWORD"),
  database: System.get_env("PGDATABASE"),
  hostname: System.get_env("PGHOST"),
  port: System.get_env("PGPORT"),
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 20,
  ssl: true