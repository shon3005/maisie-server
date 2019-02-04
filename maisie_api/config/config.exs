# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :maisie_api,
  ecto_repos: [MaisieApi.Repo]

# Configures the endpoint
config :maisie_api, MaisieApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  render_errors: [view: MaisieApiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: MaisieApi.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Guardian config details
config :maisie_api, MaisieApi.Guardian,
       issuer: "maisie_api",
       secret_key: System.get_env("GUARDIAN_SECRET")

config :sendgrid,
  api_key: System.get_env("SENDGRID_API_KEY")

config :ex_aws, 
  access_key_id: System.get_env("AWS_ACCESS_KEY_ID"),
  secret_access_key: System.get_env("AWS_SECRET_ACCESS_KEY"),
  s3: [ 
    scheme: "https://", 
    host: "s3-maisie-prod-files.s3.amazonaws.com", 
    region: "us-east-1"
  ]

config :stripity_stripe, api_key: System.get_env("STRIPE_SECRET_KEY")

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
