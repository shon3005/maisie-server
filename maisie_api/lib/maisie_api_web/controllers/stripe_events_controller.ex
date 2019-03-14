# controllers/stripe_events_controller.ex
defmodule MaisieApiWeb.StripeEventsController do
  use MaisieApiWeb, :controller

  alias MaisieApi.Services
  alias MaisieApi.Accounts

  def create(%Plug.Conn{assigns: %{:raw_body => [raw_body]}} = conn, %{"account" => account_id, "data" => %{"object" => %{"subscription" => subscription_id}}, "type" => type}) do
    [signature] = Plug.Conn.get_req_header(conn, "stripe-signature")
    handle_event_construction(conn, Stripe.Webhook.construct_event(raw_body, signature, System.get_env("STRIPE_WEBHOOK_SECRET")), subscription_id, account_id, type == "invoice.payment_succeeded")
  end

  defp handle_event_construction(conn, {:ok,
    %Stripe.Event{
      data: %{
        object: %Stripe.Invoice{
          lines: %Stripe.List{
            data: [%Stripe.LineItem{metadata: %{
              "installments_limit" => installments_limit,
              "installments_paid" => installments_paid
            }} | _tail]
          }
        }
      }
    }
  }, subscription_id, account_id, true) do
    handle_subscription(conn, String.to_integer(installments_paid) + 1, String.to_integer(installments_limit), subscription_id, account_id)
  end

  defp handle_event_construction(conn, {:error, _error}, _is_payment_succeeded) do
    conn
    |> put_status(400)
    |> json(%{})
  end

  defp handle_subscription(conn, _installments_paid, "continuous", _subscription_id, _account_id) do
    conn
    |> put_status(200)
    |> json(%{})
  end

  defp handle_subscription(conn, installments_paid, installments_limit, subscription_id, account_id) do
    update_subscription(conn, installments_paid == installments_limit, installments_paid, subscription_id, account_id)
  end

  defp update_subscription(conn, true, _installments_paid, subscription_id, account_id) do
    # cancel
    Stripe.API.request(%{}, :delete, "subscriptions/#{subscription_id}", %{}, connect_account: account_id)
    conn
    |> put_status(200)
    |> json(%{})
  end
  
  defp update_subscription(conn, false, installments_paid, subscription_id, account_id) do
    # update
    Stripe.API.request(%{metadata: %{installments_paid: installments_paid}}, :post, "subscriptions/#{subscription_id}", %{}, connect_account: account_id)
    conn
    |> put_status(200)
    |> json(%{})
  end
end