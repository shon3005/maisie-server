defmodule MaisieApiWeb.Resolvers.CircleResolver do
    alias MaisieApi.Accounts
    alias MaisieApi.Services
    alias SendGrid.{Mail, Email}

    def create_circle(_, %{input: input}, %{context: %{current_user: current_user}}) do
        interval_map = %{
            "every week" => "week",
            "every other week" => "week",
            "once a month" => "month"
        }
        interval_count_map = %{
            "every week" => 1,
            "every other week" => 2,
            "once a month" => 1
        }
        host = Accounts.get_host!(input.host_id)
        {:ok, product} = Stripe.API.request(%{name: input.title, type: "service"}, :post, "products", %{}, connect_account: host.stripe_id)
        {price, _} =  Integer.parse(input.price)

        {:ok, plan} = Stripe.API.request(%{currency: "usd", interval: interval_map[input.frequency], interval_count: interval_count_map[input.frequency], product: product["id"], amount: price * 110}, :post, "plans", %{}, connect_account: host.stripe_id)

        input = Map.put(input, :tags, String.split(input.tags, ", "))
        circle_input = Map.merge(input, %{user_id: current_user.id, stripe_product_id: product["id"], stripe_plan_id: plan["id"]})
        Services.create_circle(circle_input)
    end

    def create_question(_, %{input: input}, %{context: %{current_user: current_user}}) do
        question_input = Map.merge(input, %{user_id: current_user.id })
        Services.create_question(question_input)
        {:ok, "question created"}
    end

    def create_request(_, %{input: input}, %{context: %{current_user: current_user}}) do
        request_input = Map.merge(input, %{user_id: current_user.id})
        Services.create_request(request_input)
    end

    def accept_request(_, %{input: %{request_id: request_id, user_id: user_id, circle_id: circle_id, host_id: host_id}}, _) do
        Map.merge(%{}, %{user_id: user_id, circle_id: circle_id})
        |> Accounts.create_member()

        Services.get_request_by_id(request_id)
        |> Services.delete_request()

        user = Accounts.get_user(user_id)
        host = Accounts.get_host!(host_id)
        circle = Services.get_circle!(circle_id)
        {:ok, %Stripe.Customer{sources: %Stripe.List{data: [%Stripe.Source{id: source_id}]}}} = Stripe.Customer.retrieve(user.stripe_id)
        {:ok, %{"id" => new_source_id}} = Stripe.API.request(%{customer: user.stripe_id, original_source: source_id, usage: "reusable"}, :post, "sources", %{}, connect_account: host.stripe_id)
        {:ok, %{"id" => customer_id}} = Stripe.API.request(%{description: user.email , source: new_source_id}, :post, "customers", %{}, connect_account: host.stripe_id)
        subscription = Stripe.API.request(%{application_fee_percent: 18.18, customer: customer_id, items: [%{plan: circle.stripe_plan_id}]}, :post, "subscriptions", %{}, connect_account: host.stripe_id)

        send_accept_email(user, host, circle)
        {:ok, "request accepted"}
    end

    def deny_request(_, %{input: %{request_id: request_id, user_id: user_id, circle_id: circle_id, host_id: host_id}}, _) do
        Services.get_request_by_id(request_id)
        |> Services.delete_request()

        user = Accounts.get_user(user_id)
        host = Accounts.get_host!(host_id)
        circle = Services.get_circle!(circle_id)
        send_reject_email(user, host, circle)
        {:ok, "request denied"}
    end

    def get_circle_by_id(_, %{input: input}, _) do
        {:ok, Services.get_circle!(input.id)}
    end

    def circles(_,_,%{context: _context}) do
        {:ok, Services.list_circles()}
    end

    def get_circles_by_user_id(_, %{user_id: user_id}, _) do
        {:ok, Services.list_circles_by_user_id(user_id)}
    end

    defp send_accept_email(user, host, circle) do
        map_day_of_week = %{
            1 => "Monday",
            2 => "Tuesday",
            3 => "Wednesday",
            4 => "Thursday",
            5 => "Friday",
            6 => "Saturday",
            7 => "Sunday"
        }
        day_number = Date.day_of_week(circle.start_date)

        Email.build()
        |> Email.put_template(System.get_env("SENDGRID_APPROVAL_TEMPLATE_ID"))
        |> Email.put_from("do-not-reply@heymaisie.com")
        |> Email.add_to(user.email)
        |> Email.add_dynamic_template_data("firstName", user.first_name)
        |> Email.add_dynamic_template_data("circleTitle", circle.title)
        |> Email.add_dynamic_template_data("hostName", host.first_name <> " " <> host.last_name)
        |> Email.add_dynamic_template_data("meetingDateAndTime", "#{map_day_of_week[day_number]}, #{Date.to_string(DateTime.to_date(circle.start_date))}, #{circle.hour}:#{circle.minute} #{circle.ampm}")
        |> Email.add_dynamic_template_data("meetingAddress", circle.address)
        |> Email.add_dynamic_template_data("circleUrl", "https://heymaisie.com/circle/#{circle.id}")
        |> Mail.send()
    end

    defp send_reject_email(user, host, circle) do
        Email.build()
        |> Email.put_template(System.get_env("SENDGRID_REJECTION_TEMPLATE_ID"))
        |> Email.put_from("do-not-reply@heymaisie.com")
        |> Email.add_to(user.email)
        |> Email.add_dynamic_template_data("firstName", user.first_name)
        |> Email.add_dynamic_template_data("circleTitle", circle.title)
        |> Email.add_dynamic_template_data("hostName", host.first_name <> " " <> host.last_name)
        |> Email.add_dynamic_template_data("circleUrl", "https://heymaisie.com")
        |> Mail.send()
    end
end