defmodule MaisieApiWeb.Schema do
    use Absinthe.Schema

    alias MaisieApiWeb.Resolvers
    alias MaisieApiWeb.Schema.Middleware

    # import Types
    import_types(Absinthe.Plug.Types)
    import_types(MaisieApiWeb.Schema.Types)

    query do
        @desc "Get a list of all users"
        field :users, list_of(:user_type) do
            middleware(Middleware.Authorize, :any)
            resolve(&Resolvers.UserResolver.users/3)
        end

        @desc "Get a list of all circles"
        field :circles, list_of(:circle_type) do
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.CircleResolver.circles/3)
        end

         @desc "Get a circle by ID"
        field :circle, type: :circle_type do
          arg(:input, non_null(:circle_get_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.CircleResolver.get_circle_by_id/3)
        end
    end

    mutation do
        @desc "Register a new user"
        field :register_user, type: :user_type do
           arg(:input, non_null(:user_input_type))
           resolve(&Resolvers.UserResolver.register_user/3)
        end

        @desc "Login a user and return a JWT token"
        field :login_user, type: :session_type do
           arg(:input, non_null(:session_input_type))
           resolve(&Resolvers.SessionResolver.login_user/3)
        end

        @desc "Register a new host"
        field :register_host, type: :host_type do
           arg(:input, non_null(:host_input_type))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.HostResolver.register_host/3)
        end

      #   @desc "Create a circle"
      #   field :create_circle, type: :circle_type do
      #      arg(:input, non_null(:circle_input_type))
      #      middleware(Middleware.Authorize, :any)
      #      resolve(&Resolvers.CircleResolver.create_circle/3)
      #   end
         @desc "Create a circle"
         field :create_circle, :string do
            arg :file, non_null(:upload)

            resolve fn args, _ ->
               IO.puts("hello")
               IO.inspect(args)
               IO.puts("bye")
               args.file # this is a `%Plug.Upload{}` struct.

               {:ok, "success"}
            end
         end
    end

    # subscription do
        
    # end
end