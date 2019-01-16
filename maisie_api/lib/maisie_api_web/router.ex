defmodule MaisieApiWeb.Router do
  use MaisieApiWeb, :router

  pipeline :api do
    plug CORSPlug, [origin: System.get_env("MAISIE_ORIGIN")]
    plug :accepts, ["json"]
    plug MaisieApiWeb.Plugs.Context
  end

  scope "/" do
    pipe_through :api

    forward("/graphql", Absinthe.Plug, schema: MaisieApiWeb.Schema)

    # if Mix.env() == :dev do
      forward("/graphiql", Absinthe.Plug.GraphiQL, schema: MaisieApiWeb.Schema)
    # end
  end
end
