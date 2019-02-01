# controllers/upload_controller.ex
defmodule MaisieApiWeb.UploadController do
  use MaisieApiWeb, :controller

  alias MaisieApi.Services.Circle
  alias MaisieApi.Services

  def create(conn, %{"image" => image_params} = upload_params) do
    authorized?(conn.assigns)
    |> upload_file(conn, image_params, upload_params)
  end

  defp upload_file(true, conn, image_params, %{"id" => circle_id} = upload_params) do
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

    case Services.update_circle(Services.get_circle!(circle_id), updated_params) do
      {:ok, circle} ->
        json(conn, %{success: "file saved, circle updated successfully"})
      {:error, changeset} ->
        conn
        |> put_status(400)
        |> json(%{"error": "file was not saved, circle was not updated"})
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