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
    updated_params =
      upload_params          
      |> Map.update(image, image_params, fn _value -> "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}" end)
    
    updated_params = Map.put(%{}, :image_url, "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}")

    sync_database(table, id, updated_params, conn)
  end

  defp sync_database("circle" = table, id, updated_params, conn) do
    case Services.update_circle(Services.get_circle!(id), updated_params) do
      {:ok, circle} ->
        json(conn, %{success: "file saved, circle updated successfully"})
      {:error, changeset} ->
        conn
        |> put_status(400)
        |> json(%{"error": "file was not saved, circle was not updated"})
    end    
  end

  defp sync_database("user" = table, id, updated_params, conn) do
    IO.puts "in here made it this far"
    case Accounts.update_user_image(Accounts.get_user(id), updated_params) do
      {:ok, user} ->
        json(conn, %{success: "file saved, user updated successfully"})
      {:error, changeset} ->
        conn
        |> put_status(400)
        |> json(%{"error": "file was not saved, user was not updated"})
    end    
  end

  defp upload_file(false, conn, _image_params, _upload_params) do
    conn
    |> put_status(403)
    |> json(%{"error": "user not authorized"})
  end

  defp authorized?(%{"context" => %{"current_user": user}} = assigns) do
    true
  end

  defp authorized?(_assigns) do
    false
  end
end