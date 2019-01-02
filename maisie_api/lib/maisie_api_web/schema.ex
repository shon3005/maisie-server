defmodule MaisieApiWeb.Schema do
    use Absinthe.Schema

    alias MaisieApiWeb.Resolvers
    alias MaisieApiWeb.Schema.Middleware

    # import Types
    import_types(MaisieApiWeb.Schema.Types)

    query do
        @desc "Get a list of all users"
        field :users, list_of(:user_type) do
            # Resolver
            middleware(Middleware.Authorize, :any)
            resolve(&Resolvers.UserResolver.users/3)
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

        @desc "Create a group"
        field :create_group, type: :group_type do
           arg(:input, non_null(:group_input_type))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.GroupResolver.create_group/3)
        end
    end

    # subscription do
        
    # end
end