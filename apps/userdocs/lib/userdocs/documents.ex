defmodule UserDocs.Documents do
  @moduledoc """
  The Documents context.
  references: https://www.amberbit.com/blog/2019/4/16/composing-ecto-queries-filters-and-preloads/
  """

  import Ecto.Query, warn: false
  alias UserDocs.Repo
  alias UserDocs.Subscription

  alias UserDocs.Documents.Content

  @doc """
  Returns the list of content.

  ## Examples

      iex> list_content()
      [%Content{}, ...]

  """
  def list_content(params \\ %{}, filters \\ %{}) do
    base_content_query()
    |> maybe_preload_content_versions(params[:content_versions])
    |> maybe_filter_by_team(filters[:team_id])
    |> Repo.all()
  end

  defp base_content_query(), do: from(content in Content)

  defp maybe_preload_content_versions(query, nil), do: query
  defp maybe_preload_content_versions(query, _), do: from(version in query, preload: [:content_versions])

  defp maybe_filter_by_team(query, nil), do: query
  defp maybe_filter_by_team(query, team_id) do
    from(content in query,
      where: content.team_id == ^team_id
    )
  end

  @doc """
  Gets a single content.

  Raises `Ecto.NoResultsError` if the Content does not exist.

  ## Examples

      iex> get_content!(123)
      %Content{}

      iex> get_content!(456)
      ** (Ecto.NoResultsError)

  """
  def get_content!(id), do: Repo.get!(Content, id)
  def get_content!(state, id) do
    UserDocs.State.get!(state, id, :content, UserDocs.Documents.Content)
  end

  @doc """
  Creates a content.

  ## Examples

      iex> create_content(%{field: value})
      {:ok, %Content{}}

      iex> create_content(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_content(attrs \\ %{}) do
    %Content{}
    |> Content.changeset(attrs)
    |> Repo.insert()
    |> Subscription.broadcast("content", "create")
  end

  @doc """
  Updates a content.

  ## Examples

      iex> update_content(content, %{field: new_value})
      {:ok, %Content{}}

      iex> update_content(content, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_content(%Content{} = content, attrs) do
    content
    |> Content.changeset(attrs)
    |> Repo.update()
    |> Subscription.broadcast("content", "update")
  end

  @doc """
  Deletes a content.

  ## Examples

      iex> delete_content(content)
      {:ok, %Content{}}

      iex> delete_content(content)
      {:error, %Ecto.Changeset{}}

  """
  def delete_content(%Content{} = content) do
    Repo.delete(content)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking content changes.

  ## Examples

      iex> change_content(content)
      %Ecto.Changeset{data: %Content{}}

  """
  def change_content(%Content{} = content, attrs \\ %{}) do
    Content.changeset(content, attrs)
  end

  alias UserDocs.Documents.Document

  @doc """
  Returns the list of documents.

  ## Examples

      iex> list_documents()
      [%Document{}, ...]

  """
  def list_documents do
    Repo.all(Document)
  end

  @doc """
  Gets a single document.

  Raises `Ecto.NoResultsError` if the Document does not exist.

  ## Examples

      iex> get_document!(123)
      %Document{}

      iex> get_document!(456)
      ** (Ecto.NoResultsError)

  """
  def get_document!(id, params \\ %{}, _filters \\ %{}) do
    base_document_query(id)
    |> maybe_preload_version(params[:version])
    |> Repo.one!()
  end

  defp maybe_preload_version(query, nil), do: query
  defp maybe_preload_version(query, _), do: from(document in query, preload: [:version])


  defp base_document_query(id) do
    from(document in Document, where: document.id == ^id)
  end

  @doc """
  Creates a document.

  ## Examples

      iex> create_document(%{field: value})
      {:ok, %Document{}}

      iex> create_document(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_document(attrs \\ %{})
  def create_document(attrs = %{ "body" => ""}) do
    IO.puts("Creating a document with an empty body")
    result = create_document(Map.put(attrs, "body", UserDocs.Documents.Document.default_body))
  end
  def create_document(attrs) do
    %Document{}
    |> Document.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a document.

  ## Examples

      iex> update_document(document, %{field: new_value})
      {:ok, %Document{}}

      iex> update_document(document, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_document(%Document{} = document, attrs) do
    document
    |> Document.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a document.

  ## Examples

      iex> delete_document(document)
      {:ok, %Document{}}

      iex> delete_document(document)
      {:error, %Ecto.Changeset{}}

  """
  def delete_document(%Document{} = document) do
    Repo.delete(document)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking document changes.

  ## Examples

      iex> change_document(document)
      %Ecto.Changeset{data: %Document{}}

  """
  def change_document(%Document{} = document, attrs \\ %{}) do
    Document.changeset(document, attrs)
  end

  alias UserDocs.Documents.ContentVersion

  @doc """
  Returns the list of content_versions.

  ## Examples

      iex> list_content_versions()
      [%ContentVersion{}, ...]

  """
  def list_content_versions(params \\ %{}, filters \\ %{}) do
    base_content_version_query()
    |> maybe_filter_by_content_id(filters[:content_id])
    |> maybe_filter_by_version_id(filters[:version_id])
    |> maybe_preload_language_code(params[:language_code])
    |> maybe_filter_by_team_id(filters[:team_id])
    |> Repo.all()
  end

  defp maybe_preload_language_code(query, nil), do: query
  defp maybe_preload_language_code(query, _), do: from(version in query, preload: [:language_code])


  defp maybe_filter_by_content_id(query, nil), do: query
  defp maybe_filter_by_content_id(query, content_id) do
    from(content in query,
      where: content.content_id == ^content_id
    )
  end

  defp maybe_filter_by_version_id(query, nil), do: query
  defp maybe_filter_by_version_id(query, version_id) do
    from(content_version in query,
      where: content_version.version_id == ^version_id
    )
  end

  defp maybe_filter_by_team_id(query, nil), do: query
  defp maybe_filter_by_team_id(query, team_id) do
    from(content_version in query,
      left_join: content in UserDocs.Documents.Content, on: content.id == content_version.content_id,
      left_join: team in UserDocs.Users.Team, on: team.id == content.team_id,
      where: team.id == ^team_id)
  end

  defp base_content_version_query(), do: from(content_versions in ContentVersion)

  @doc """
  Gets a single content_version.

  Raises `Ecto.NoResultsError` if the Content version does not exist.

  ## Examples

      iex> get_content_version!(123)
      %ContentVersion{}

      iex> get_content_version!(456)
      ** (Ecto.NoResultsError)

  """
  def get_content_version!(id, _params \\ %{}, _filters \\ %{})
  def get_content_version!(id, _params, _filters) do
    Repo.get!(ContentVersion, id)
  end
  def get_content_version!(id, _params, _filters, state) do
    UserDocs.State.get!(state, id, :elements, Element)
  end

  @doc """
  Creates a content_version.

  ## Examples

      iex> create_content_version(%{field: value})
      {:ok, %ContentVersion{}}

      iex> create_content_version(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_content_version(attrs \\ %{}) do
    %ContentVersion{}
    |> ContentVersion.changeset(attrs)
    |> Repo.insert()
    |> Subscription.broadcast("content_version", "create")
  end

  @doc """
  Updates a content_version.

  ## Examples

      iex> update_content_version(content_version, %{field: new_value})
      {:ok, %ContentVersion{}}

      iex> update_content_version(content_version, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_content_version(%ContentVersion{} = content_version, attrs) do
    content_version
    |> ContentVersion.changeset(attrs)
    |> Repo.update()
    |> Subscription.broadcast("content_version", "update")
  end

  @doc """
  Deletes a content_version.

  ## Examples

      iex> delete_content_version(content_version)
      {:ok, %ContentVersion{}}

      iex> delete_content_version(content_version)
      {:error, %Ecto.Changeset{}}

  """
  def delete_content_version(%ContentVersion{} = content_version) do
    content_version
    |> Repo.delete()
    |> Subscription.broadcast("content_version", "update")
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking content_version changes.

  ## Examples

      iex> change_content_version(content_version)
      %Ecto.Changeset{data: %ContentVersion{}}

  """
  def change_content_version(%ContentVersion{} = content_version, attrs \\ %{}) do
    ContentVersion.changeset(content_version, attrs)
  end

  alias UserDocs.Documents.LanguageCode

  @doc """
  Returns the list of language_codes.

  ## Examples

      iex> list_language_codes()
      [%LanguageCode{}, ...]

  """
  def list_language_codes do
    Repo.all(LanguageCode)
  end

  @doc """
  Gets a single language_code.

  Raises `Ecto.NoResultsError` if the Language code does not exist.

  ## Examples

      iex> get_language_code!(123)
      %LanguageCode{}

      iex> get_language_code!(456)
      ** (Ecto.NoResultsError)

  """
  def get_language_code!(id), do: Repo.get!(LanguageCode, id)

  @doc """
  Creates a language_code.

  ## Examples

      iex> create_language_code(%{field: value})
      {:ok, %LanguageCode{}}

      iex> create_language_code(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_language_code(attrs \\ %{}) do
    %LanguageCode{}
    |> LanguageCode.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a language_code.

  ## Examples

      iex> update_language_code(language_code, %{field: new_value})
      {:ok, %LanguageCode{}}

      iex> update_language_code(language_code, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_language_code(%LanguageCode{} = language_code, attrs) do
    language_code
    |> LanguageCode.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a language_code.

  ## Examples

      iex> delete_language_code(language_code)
      {:ok, %LanguageCode{}}

      iex> delete_language_code(language_code)
      {:error, %Ecto.Changeset{}}

  """
  def delete_language_code(%LanguageCode{} = language_code) do
    Repo.delete(language_code)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking language_code changes.

  ## Examples

      iex> change_language_code(language_code)
      %Ecto.Changeset{data: %LanguageCode{}}

  """
  def change_language_code(%LanguageCode{} = language_code, attrs \\ %{}) do
    LanguageCode.changeset(language_code, attrs)
  end
end
