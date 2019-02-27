defmodule MaisieApi.AccountsTest do
  use MaisieApi.DataCase

  alias MaisieApi.Accounts

  describe "users" do
    alias MaisieApi.Accounts.User

    @valid_attrs %{email: "shon3005@gmail.com", first_name: "Shaun", last_name: "Chua", password: "123456789", password_confirmation: "123456789", role: "user"}
    # @update_attrs %{email: "shaun.chua@nyu.edu", first_name: "Shaunny", last_name: "Tan", password_hash: "some updated password_hash", role: "user"}
    # @invalid_attrs %{email: nil, first_name: nil, last_name: nil, password_hash: nil, role: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_user()

      user
    end

    # test "list_users/0 returns all users" do
    #   user = user_fixture()
    #   assert Accounts.list_users() == [user]
    # end

    # test "get_user!/1 returns the user with given id" do
    #   user = user_fixture()
    #   assert Accounts.get_user!(user.id) == user
    # end

    # test "create_user/1 with valid data creates a user" do
    #   assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
    #   assert user.email == "shon3005@gmail.com"
    #   assert user.first_name == "Shaun"
    #   assert user.last_name == "Chua"
    #   # assert user.password_hash == "some password_hash"
    #   assert user.role == "user"
    # end

    # test "create_user/1 with invalid data returns error changeset" do
    #   assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    # end

    # test "update_user/2 with valid data updates the user" do
    #   user = user_fixture()
    #   assert {:ok, %User{} = user} = Accounts.update_user(user, @update_attrs)
    #   assert user.email == "some updated email"
    #   assert user.first_name == "some updated first_name"
    #   assert user.last_name == "some updated last_name"
    #   assert user.password_hash == "some updated password_hash"
    #   assert user.role == "some updated role"
    # end

    # test "update_user/2 with invalid data returns error changeset" do
    #   user = user_fixture()
    #   assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
    #   assert user == Accounts.get_user!(user.id)
    # end

    # test "delete_user/1 deletes the user" do
    #   user = user_fixture()
    #   assert {:ok, %User{}} = Accounts.delete_user(user)
    #   assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    # end

    # test "change_user/1 returns a user changeset" do
    #   user = user_fixture()
    #   assert %Ecto.Changeset{} = Accounts.change_user(user)
    # end
  end

  # describe "hosts" do
  #   alias MaisieApi.Accounts.Host

  #   @valid_attrs %{description: "some description", education: "some education", image_url: "some image_url", license: "some license"}
  #   @update_attrs %{description: "some updated description", education: "some updated education", image_url: "some updated image_url", license: "some updated license"}
  #   @invalid_attrs %{description: nil, education: nil, image_url: nil, license: nil}

  #   def host_fixture(attrs \\ %{}) do
  #     {:ok, host} =
  #       attrs
  #       |> Enum.into(@valid_attrs)
  #       |> Accounts.create_host()

  #     host
  #   end

  #   test "list_hosts/0 returns all hosts" do
  #     host = host_fixture()
  #     assert Accounts.list_hosts() == [host]
  #   end

  #   test "get_host!/1 returns the host with given id" do
  #     host = host_fixture()
  #     assert Accounts.get_host!(host.id) == host
  #   end

  #   test "create_host/1 with valid data creates a host" do
  #     assert {:ok, %Host{} = host} = Accounts.create_host(@valid_attrs)
  #     assert host.description == "some description"
  #     assert host.education == "some education"
  #     assert host.image_url == "some image_url"
  #     assert host.license == "some license"
  #   end

  #   test "create_host/1 with invalid data returns error changeset" do
  #     assert {:error, %Ecto.Changeset{}} = Accounts.create_host(@invalid_attrs)
  #   end

  #   test "update_host/2 with valid data updates the host" do
  #     host = host_fixture()
  #     assert {:ok, %Host{} = host} = Accounts.update_host(host, @update_attrs)
  #     assert host.description == "some updated description"
  #     assert host.education == "some updated education"
  #     assert host.image_url == "some updated image_url"
  #     assert host.license == "some updated license"
  #   end

  #   test "update_host/2 with invalid data returns error changeset" do
  #     host = host_fixture()
  #     assert {:error, %Ecto.Changeset{}} = Accounts.update_host(host, @invalid_attrs)
  #     assert host == Accounts.get_host!(host.id)
  #   end

  #   test "delete_host/1 deletes the host" do
  #     host = host_fixture()
  #     assert {:ok, %Host{}} = Accounts.delete_host(host)
  #     assert_raise Ecto.NoResultsError, fn -> Accounts.get_host!(host.id) end
  #   end

  #   test "change_host/1 returns a host changeset" do
  #     host = host_fixture()
  #     assert %Ecto.Changeset{} = Accounts.change_host(host)
  #   end
  # end
end
