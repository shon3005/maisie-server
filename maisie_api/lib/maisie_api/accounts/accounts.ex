defmodule MaisieApi.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias MaisieApi.Repo

  alias MaisieApi.Accounts.User

  alias SendGrid.{Mail, Email}

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%User{}, ...]

  """
  def list_users do
    Repo.all(User)
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %User{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user!(id), do: Repo.get!(User, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{field: value})
      {:ok, %User{}}

      iex> create_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
    |> to_send_email(Mix.env())
  end

  defp to_send_email({:ok, details}=user, :prod) do
    send_email(details)
    user
  end

  defp to_send_email({:ok, details}=user, :dev) do
    send_email(details)
    user
  end

  defp to_send_email({:error, _details}=user, _env) do
    user
  end

  defp to_send_email(user, _env) do
    user
  end

  defp send_email(details) do
    Email.build()
    |> Email.put_template(System.get_env("SENDGRID_TEMPLATE_ID"))
    |> Email.put_from("do-not-reply@heymaisie.com")
    |> Email.add_to(details.email)
    |> Email.add_dynamic_template_data("firstName", details.first_name)
    |> Mail.send()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_user(user, %{field: new_value})
      {:ok, %User{}}

      iex> update_user(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a User.

  ## Examples

      iex> delete_user(user)
      {:ok, %User{}}

      iex> delete_user(user)
      {:error, %Ecto.Changeset{}}

  """
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user(user)
      %Ecto.Changeset{source: %User{}}

  """
  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end
end
