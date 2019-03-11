# controllers/upload_controller.ex
defmodule MaisieApiWeb.UploadController do
  use MaisieApiWeb, :controller

  alias MaisieApi.Services
  alias MaisieApi.Accounts

  def create(conn, %{"image" => image_params} = upload_params) do
    authorized?(conn.assigns)
    |> upload_file(conn, image_params, upload_params)
  end

  defp upload_file(true, conn, image_params, %{"id" => id, "table" => table} = upload_params) do
    file_uuid = UUID.uuid4(:hex)
    image_filename = image_params.filename
    unique_filename = "#{file_uuid}-#{image_filename}"
    {:ok, image_binary} = File.read(image_params.path)

    bucket_name = System.get_env("BUCKET_NAME")
          
    image = 
      ExAws.S3.put_object(bucket_name, unique_filename, image_binary)          
      |> ExAws.request!

    # build the image url and add to the params to be stored
    upload_params          
    |> Map.update(image, image_params, fn _value -> "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}" end)
    
    updated_params = Map.put(%{}, :image_url, "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{String.replace(unique_filename, " ", "%20")}")
    sync_database(table, id, updated_params, conn, bucket_name)
  end

  defp upload_file(false, conn, _image_params, _upload_params) do
    conn
    |> put_status(403)
    |> json(%{error: "user not authorized"})
  end

  defp sync_database("circle", id, updated_params, conn, bucket_name) do
    circle = Services.get_circle!(id)
    # delete previous file
    delete_previous_file(circle.image_url, bucket_name)

    case Services.update_circle(circle, updated_params) do
      {:ok, _circle} ->
        json(conn, %{success: "file saved, circle updated successfully"})
      {:error, _changeset} ->
        conn
        |> put_status(400)
        |> json(%{error: "file was not saved, circle was not updated"})
    end    
  end

  defp sync_database("user", id, updated_params, conn, bucket_name) do
    user = Accounts.get_user(id)
      # delete previous file
    delete_previous_file(user.image_url, bucket_name)

    case Accounts.update_user_image(user, updated_params) do
      {:ok, _user} ->
        json(conn, %{success: "file saved, user updated successfully"})
      {:error, _changeset} ->
        conn
        |> put_status(400)
        |> json(%{error: "file was not saved, user was not updated"})
    end    
  end

  defp sync_database("host", id, updated_params, conn, bucket_name) do
    host = Accounts.get_host!(id)
    # delete previous file
    delete_previous_file(host.image_url, bucket_name)

    case Accounts.update_host_image(host, updated_params) do
      {:ok, _host} ->
        json(conn, %{success: "file saved, host updated successfully"})
      {:error, _changeset} ->
        conn
        |> put_status(400)
        |> json(%{error: "file was not saved, host was not updated"})
    end    
  end

  defp delete_previous_file(nil, _bucket_name) do
    "nothing to do here"
  end

  defp delete_previous_file(image_url, bucket_name) do
    ExAws.S3.delete_object(bucket_name, String.replace(image_url, "https://s3-maisie-prod-files.s3.amazonaws.com/s3-maisie-prod-files/", ""))
    |> ExAws.request!
  end

  defp authorized?(%{"context" => %{current_user: _user}}) do
    true
  end

  defp authorized?(_assigns) do
    false
  end
end