defmodule MaisieApi.Services do
  @moduledoc """
  The Services context.
  """

  import Ecto.Query, warn: false
  alias MaisieApi.Repo

  alias MaisieApi.Services.{Circle, Question, Request}

  @doc """
  Returns the list of circles.

  ## Examples

      iex> list_circles()
      [%Circle{}, ...]

  """
  def list_circles do
    Repo.all(Circle)
  end

  def list_circles_by_user_id(id) do
    query = from c in Circle,
     select: c,
     where: c.user_id == ^id
    Repo.all(query)
  end

  def get_request_by_id(id), do: Repo.get(Request, id)

  @doc """
  Gets a single circle.

  Raises `Ecto.NoResultsError` if the Circle does not exist.

  ## Examples

      iex> get_circle!(123)
      %Circle{}

      iex> get_circle!(456)
      ** (Ecto.NoResultsError)

  """
  def get_circle!(id), do: Repo.get!(Circle, id)

  @doc """
  Creates a circle.

  ## Examples

      iex> create_circle(%{field: value})
      {:ok, %Circle{}}

      iex> create_circle(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_circle(attrs \\ %{}) do
    %Circle{}
    |> Circle.changeset(attrs)
    |> Repo.insert()
  end

  def create_request(attrs \\ %{}) do
    %Request{}
    |> Request.changeset(attrs)
    |> Repo.insert()
  end

  def create_question(attrs \\ %{}) do
    %Question{}
    |> Question.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a circle.

  ## Examples

      iex> update_circle(circle, %{field: new_value})
      {:ok, %Circle{}}

      iex> update_circle(circle, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_circle(%Circle{} = circle, attrs) do
    circle
    |> Circle.update_circle_changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Circle.

  ## Examples

      iex> delete_circle(circle)
      {:ok, %Circle{}}

      iex> delete_circle(circle)
      {:error, %Ecto.Changeset{}}

  """
  def delete_circle(%Circle{} = circle) do
    Repo.delete(circle)
  end

  def delete_request(%Request{} = request) do
    Repo.delete(request)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking circle changes.

  ## Examples

      iex> change_circle(circle)
      %Ecto.Changeset{source: %Circle{}}

  """
  def change_circle(%Circle{} = circle) do
    Circle.changeset(circle, %{})
  end
end
