defmodule MaisieApiWeb.Schema do
    use Absinthe.Schema

    alias MaisieApiWeb.Resolvers
    alias MaisieApiWeb.Schema.Middleware

    # import Types #
    import_types(Absinthe.Plug.Types)
    import_types(MaisieApiWeb.Schema.Types)

    query do
        @desc "Get authenticated user"
        field :get_user, :user_type do
            middleware(Middleware.Authorize, :any)
            resolve(&Resolvers.UserResolver.user/3)
        end

         @desc "Get user profile by user id"
        field :get_user_by_id, :user_type do
            arg(:user_id, non_null(:string))
            middleware(Middleware.Authorize, :any)
            resolve(&Resolvers.UserResolver.get_user_by_id/3)
        end

        @desc "Get a list of all users"
        field :users, list_of(:user_type) do
            middleware(Middleware.Authorize, :any)
            resolve(&Resolvers.UserResolver.users/3)
        end

        @desc "Get a list of all circles"
        field :circles, list_of(:circle_type) do
           resolve(&Resolvers.CircleResolver.circles/3)
        end

        @desc "Get a circle by ID"
        field :circle, type: :circle_type do
          arg(:input, non_null(:circle_get_type))
          resolve(&Resolvers.CircleResolver.get_circle_by_id/3)
        end

        @desc "Get a circles by user ID"
        field :user_circles, type: list_of(:circle_type) do
          arg(:user_id, non_null(:string))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.CircleResolver.get_circles_by_user_id/3)
        end

        @desc "Redirect to Stripe to set up payments"
        field :stripe_authorize, type: :string do
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.PaymentResolver.set_up_payments/3)
        end

        @desc "Retrive Host's last 5 transactions"
        field :stripe_transactions, type: :transfer_type do
           arg(:host_id, non_null(:string))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.HostResolver.get_transactions/3)
        end

        @desc "Retrieve Host Stripe Account URL"
        field :host_stripe_dashboard_url, type: :string do
           arg(:host_id, non_null(:string))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.HostResolver.host_stripe_dashboard_url/3)
        end

        @desc "Execute Host Payout"
        field :host_payout, type: :string do
           arg(:host_id, non_null(:string))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.HostResolver.host_payout/3)
        end
    end

    mutation do
        @desc "Register a new user"
        field :register_user, type: :session_type do
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

        @desc "Create a circle"
        field :create_circle, type: :circle_type do
           arg(:input, non_null(:circle_input_type))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.CircleResolver.create_circle/3)
        end

        @desc "Connect the new Stripe account to the Maisie account"
        field :sync_payment_account, type: :host_type do
           arg(:input, non_null(:payment_input_type))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.PaymentResolver.sync_payment_account/3)
        end

        @desc "Create a Stripe customer"
        field :create_customer, type: :user_type do
           arg(:input, non_null(:stripe_customer_type))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.PaymentResolver.create_customer/3)
        end

        @desc "Update a Stripe customer card"
        field :update_customer, type: :user_type do
           arg(:input, non_null(:stripe_customer_type))
           middleware(Middleware.Authorize, :any)
           resolve(&Resolvers.PaymentResolver.create_or_update_customer/3)
        end

        @desc "Update a user profile"
        field :update_profile, type: :user_update_response_type do
          arg(:input, non_null(:user_update_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.UserResolver.update_user/3)
        end

        @desc "Update a user password"
        field :update_password, type: :string do
          arg(:input, non_null(:user_update_password_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.UserResolver.update_user_password/3)
        end

        @desc "Update a host profile"
        field :update_host, type: :host_type do
          arg(:input, non_null(:host_input_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.HostResolver.update_host/3)
        end

        @desc "Update user support flag"
        field :submit_support, type: :user_type do
          arg(:input, non_null(:user_support_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.UserResolver.update_user_support/3)
        end

        @desc "Update user support flag"
        field :charge_customer, type: :string do
          arg(:input, non_null(:charge_input_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.PaymentResolver.charge_customer/3)
        end

        @desc "Create a circle question"
        field :create_question, type: :string do
          arg(:input, non_null(:question_input_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.CircleResolver.create_question/3)
        end

        @desc "Create a request to join a circle"
        field :create_request, type: :request_type do
          arg(:input, non_null(:request_input_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.CircleResolver.create_request/3)
        end

         @desc "Accept a request to join a circle"
        field :accept_request, type: :user_type do
          arg(:input, non_null(:member_input_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.CircleResolver.accept_request/3)
        end

         @desc "Deny a request to join a circle"
        field :deny_request, type: :user_type do
          arg(:input, non_null(:member_input_type))
          middleware(Middleware.Authorize, :any)
          resolve(&Resolvers.CircleResolver.deny_request/3)
        end
    end
end