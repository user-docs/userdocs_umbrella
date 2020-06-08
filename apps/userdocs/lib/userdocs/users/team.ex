defmodule UserDocs.Users.Team do
  use Ecto.Schema
  import Ecto.Changeset

  alias UserDocs.Users

  schema "teams" do
    field :name, :string

    many_to_many :users, Users.User, join_through: Users.TeamUser, on_replace: :delete
    timestamps()
  end

  @doc false
  def changeset(team, attrs, users \\ []) do
    team
    |> cast(attrs, [:name])
    |> put_assoc(:users, users)
    |> validate_required([:name])
  end
end
