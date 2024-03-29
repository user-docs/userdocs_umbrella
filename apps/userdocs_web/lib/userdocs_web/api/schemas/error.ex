defmodule UserDocsWeb.API.Schema.Error do
  use Absinthe.Schema.Notation

  object :error do
    field :message, :string
    field :name, :string
    field :stack, :string
  end

  input_object :error_input do
    field :message, :string
    field :name, :string
    field :stack, :string
  end
end
