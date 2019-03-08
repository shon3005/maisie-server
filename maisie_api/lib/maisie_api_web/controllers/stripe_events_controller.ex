# controllers/stripe_events_controller.ex
defmodule MaisieApiWeb.StripeEventsController do
  use MaisieApiWeb, :controller

  alias MaisieApi.Services
  alias MaisieApi.Accounts

  def create(conn, %{"account" => account_id, "data" => %{"object" => %{"subscription" => subscription_id, "metadata" => metadata}}, "type" => type} = body) do
    {:ok, %{"metadata" => %{"installments_paid" => installments_paid, "installments_limit" => installments_limit}}} = Stripe.API.request(%{}, :get, "subscriptions/#{subscription_id}", %{}, connect_account: account_id)
    handle_subscription(String.to_integer(installments_paid) + 1, String.to_integer(installments_limit), subscription_id, account_id)
    conn
    |> put_status(200)
    |> json(%{})
  end

  defp handle_subscription(_installments_paid, "continuous", _subscription_id, _account_id) do
    {:ok, "nothing to do here"}
  end

  defp handle_subscription(installments_paid, installments_limit, subscription_id, account_id) do
    update_subscription(installments_paid == installments_limit, installments_paid, subscription_id, account_id)
  end

  defp update_subscription(true, _installments_paid, subscription_id, account_id) do
    # cancel
    Stripe.API.request(%{}, :delete, "subscriptions/#{subscription_id}", %{}, connect_account: account_id)
  end
  
  defp update_subscription(false, installments_paid, subscription_id, account_id) do
    # update
    Stripe.API.request(%{metadata: %{installments_paid: installments_paid}}, :post, "subscriptions/#{subscription_id}", %{}, connect_account: account_id)
  end
end