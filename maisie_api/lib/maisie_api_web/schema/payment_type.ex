defmodule MaisieApiWeb.Schema.Types.PaymentType do
    use Absinthe.Schema.Notation

    object :payment_type do
        field(:token, :string)
        field(:user, :user_type)
    end

    input_object :payment_input_type do
        field(:state, :string)
        field(:code, :string)
        field(:id, :id)
    end

    input_object :charge_input_type do
        field(:customer_id, :string)
        field(:host_id, :string)
        field(:amount, :integer)
        field(:circle, :string)
    end

    input_object :stripe_customer_type do
        field(:source, :string)
    end
end