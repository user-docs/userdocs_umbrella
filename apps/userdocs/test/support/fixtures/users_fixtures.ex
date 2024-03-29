defmodule UserDocs.UsersFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `UserDocs.Auth` context.
  """
  alias UserDocs.Users

  def user_attrs(type, password \\ nil)
  def user_attrs(:options, _password) do
    %{
    }
  end
  def user_attrs(:confirmed, password) do
    guarded_password = password || UUID.uuid4()
    %{
      email: UUID.uuid4() <> "@user-docs.com",
      password: guarded_password,
      password_confirmation: guarded_password,
      email_confirmed_at: DateTime.utc_now()
    }
  end
  def user_attrs(:valid, password) do
    guarded_password = password || UUID.uuid4()
    %{
      email: UUID.uuid4() <> "@user-docs.com",
      password: guarded_password,
      password_confirmation: guarded_password
    }
  end
  def user_attrs(:invalid, _password) do
    %{
      email: UUID.uuid4(),
      password: "",
      password_confirmation: ""
    }
  end

  def user(password \\ UUID.uuid4()) do
    {:ok, user} =
      user_attrs(:valid, password)
      |> Users.create_test_user()
    user
  end

  def confirmed_user(password \\ UUID.uuid4()) do
    {:ok, user} =
      user_attrs(:confirmed, password)
      |> Users.create_test_user()
    user
  end

  def team_attrs(:valid) do
    %{
      name: UUID.uuid4(),
      aws_bucket: "userdocs-test",
      aws_access_key_id: "AKIAT5VKLWBUOAYXO656",
      aws_secret_access_key: "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",
      aws_region: "us-east-2",
      css: "{test: value}"
    }
  end
  def team_attrs(:invalid) do
    %{
      name: nil,
      aws_bucket: "userdocs-test",
      aws_access_key_id: "AKIAT5VKLWBUOAYXO656",
      aws_secret_access_key: "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",
      aws_region: "us-east-2"
    }
  end

  def team() do
    {:ok, team} =
      team_attrs(:valid)
      |> Users.create_team()
    team
  end

  def team_user(user_id, team_id) do
    {:ok, team_user} =
      team_user_attrs(:valid, user_id, team_id)
      |> Users.create_team_user()
      team_user
  end

  def team_user_attrs(:valid, user_id, team_id) do
    %{
      team_id: team_id,
      user_id: user_id
    }
  end

end
