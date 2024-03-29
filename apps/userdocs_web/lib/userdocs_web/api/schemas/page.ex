defmodule UserDocsWeb.API.Schema.Page do
  @moduledoc false
  use Absinthe.Schema.Notation
  alias UserDocsWeb.API.Resolvers

  object :page do
    field :id, :id
    field :order, :integer
    field :name, :string
    field :url, :string
    field :project, :project, resolve: &Resolvers.Project.get_project!/3
  end
end
