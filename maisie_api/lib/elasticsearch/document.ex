defimpl Elasticsearch.Document, for: MaisieApi.Accounts.User do
  def id(user), do: user.id
  def routing(_), do: false
  def encode(user) do
    %{
        firstName: user.first_name,
        lastName: user.last_name,
        zip: user.zip,
        email: user.email,
        role: user.role
    }
  end
end