defmodule MaisieApiWeb.Resolvers.StripeConnectResolver do
    alias MaisieApi.{Accounts, Guardian}

    def set_up_payments(_, _, %{context: %{current_user: current_user}}) do
        {:ok, Accounts.get_user!(current_user.id)};
    end
end