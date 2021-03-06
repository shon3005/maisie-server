defmodule MaisieApiWeb.Router do
  use MaisieApiWeb, :router

  pipeline :api do
    plug CORSPlug, [origin: System.get_env("MAISIE_ORIGIN")]
    plug :accepts, ["json"]
    plug MaisieApiWeb.Plugs.Context
  end

  scope "/" do
    pipe_through :api

    resources "/upload", MaisieApiWeb.UploadController, only: [:create]
    resources "/stripe-events", MaisieApiWeb.StripeEventsController, only: [:create]
    
    forward("/graphql", Absinthe.Plug, schema: MaisieApiWeb.Schema)

    if Mix.env() == :dev do
      forward("/graphiql", Absinthe.Plug.GraphiQL, schema: MaisieApiWeb.Schema)
    end
  end
end
