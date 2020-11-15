defmodule UserDocs.Documents.Docubit.Address do
  use Ecto.Schema
  import Ecto.Changeset

  alias UserDocs.Documents.Docubit

  @derive {Jason.Encoder, only: [:docubit_id, :body]}

  @primary_key false
  schema "address" do
    belongs_to :docubit, Docubit
    field :body, { :map, EctoAddress }
  end


  @doc false
  def changeset(document, attrs) do
    IO.inspect("Address changeset")
    IO.inspect(attrs)
    document
    |> cast(attrs, [ :body, :docubit_id ])
    |> IO.inspect()
    |> foreign_key_constraint(:docubit)
  end
end
