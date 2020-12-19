defmodule UserDocs.Documents.Docubit.Context do
  use Ecto.Schema
  import Ecto.Changeset

  require Logger

  alias UserDocs.Documents.Docubit, as: Docubit
  alias UserDocs.Documents.DocubitType
  alias UserDocs.Documents.Docubit.Context

  @primary_key false
  embedded_schema do
    field :settings, :map
  end

  # This function will apply the context in reverse order, overwriting each time.  It's the opposite of what
  # We have below (which might be incorrect on second thought)
  def context(docubit = %Docubit{}, parent_context = %Context{}) do
    with { :ok, context } <- update_context(parent_context, type_context(docubit)),
      { :ok, context } <- update_context(context, %{ settings: docubit.settings })
    do
      { :ok, context }
    else
      { :error, changeset }-> changeset
    end
  end

  def update_context(%Context{} = context, attrs \\ %{}) do
    context
    |> changeset(attrs)
    |> apply_action(:update)
  end

  def create_context(attrs) do
    %Context{}
    |> changeset(attrs)
    |> apply_action(:update)
  end

  def changeset(context, attrs) do
    context
    |> cast(attrs, [ :settings ])
    |> apply_overwrite_policy(:settings)
  end

  defp apply_overwrite_policy(changeset, field) do
    case get_change(changeset, field) do # When there's a change to the field, do stuff, otherwise, return the changeset
      nil ->
        delete_change(changeset, field) # Because we apply in reverse order, changing to a nil value must be ignored
      "" -> changeset
      changes ->
        changes =
          Enum.reduce(changes, Map.get(changeset.data, field, %{}),
            fn({ key, value }, fields) -> # When there's a change, rip through the values and retreive each key from the existin fields
              case fields do # When the fields aren't there, we return the changeset, because we want to apply the changes as is
                nil -> changes
                _ ->
                  case Map.get(fields, key, :not_exist) do # This is the policy of the change.  Basically we overwrite everything because we apply in reverse order.e
                    nil -> Map.put(fields, key, value) # When the field is there but has a nil value, put the value from the changeset
                    :not_exist -> Map.put_new(fields, key, value) # When the field doesn't exist, put the value from the changeset
                    _ -> Map.put(fields, key, value) # When the field is there and has a value, put the value
                  end
              end
            end
          )
        put_change(changeset, field, changes)
    end
  end

  # Applies all Contexts to a docubit.  Takes a docubit, returns a
  # Docubit with parent, type, and local contexts applied to the
  # Docubit
  def apply_context_changes(docubit, parent_contexts) do
    docubit
    |> add_contexts(parent_contexts, :type)
  end


  # Adds a particular type of context by calling add_contexts with the
  # contexts, fetched from the appropriate place.  Controls the
  # Hierarchy of contexts
  defp add_contexts(docubit = %Docubit{}, parent_contexts, :type) do
    Logger.debug("Adding Contexts to docubit with parent_contexts: #{inspect(parent_contexts)}")
    docubit
    |> add_contexts(parent_contexts)
    |> add_contexts(docubit.docubit_type.contexts)
  end

  # Converts the kw list of
  defp add_contexts(docubit = %Docubit{}, contexts) when is_map(contexts) do
    Logger.debug("Adding contexts #{inspect(contexts)} to Docubit")

    changeset = Docubit.changeset(docubit, contexts)

    { :ok, docubit } =
      Ecto.Changeset.apply_action(changeset, :update)

    docubit
  end

  defp type_context(docubit = %Docubit{ docubit_type: %DocubitType{} }) do
    docubit
    |> Map.get(:docubit_type)
    |> Map.get(:contexts)
  end
end
