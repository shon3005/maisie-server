defmodule MaisieApiWeb.Schema.Types.PaymentType do
    use Absinthe.Schema.Notation

    object :payment_type do
        field(:token, :string)
        field(:user, :user_type)
    end

    input_object :payment_input_type do
        field(:state, :string)
        field(:code, :string)
    end

    input_object :stripe_customer_type do
        field(:source, :string)
    end
end