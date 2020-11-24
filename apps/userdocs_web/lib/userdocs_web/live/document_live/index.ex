defmodule UserDocsWeb.DocumentLive.Index do
  use UserDocsWeb, :live_view

  alias UserDocs.Users
  alias UserDocs.Documents
  alias UserDocs.Documents.Document
  alias UserDocs.Documents.DocumentVersion

  alias UserDocsWeb.Root
  alias UserDocsWeb.Defaults
  alias UserDocsWeb.UserLive.LoginFormComponent

  @impl true
  def mount(params, session, socket) do
    {
      :ok,
      socket
      |> Root.authorize(session)
      |> Root.initialize()
      |> initialize()
    }
  end

  def initialize(%{ assigns: %{ auth_state: :logged_in }} = socket) do
    socket
    |> (&(assign(&1, :data, Map.put(&1.assigns.data, :documents, [])))).()
    |> (&(assign(&1, :data, Map.put(&1.assigns.data, :document_versions, [])))).()
    |> load_document_versions()
    |> load_documents()
    |> prepare_documents()
    |> projects_select_list()
  end
  def initialize(socket), do: socket

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Document")
    |> assign(:document, Documents.get_document!(id))
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Document")
    |> assign(:document, %Document{})
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Documents")
    |> assign(:document, nil)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    document_version = Documents.get_document_version!(id)
    {:ok, _} = Documents.delete_document_version(document_version)

    {:noreply, socket}
  end
  def handle_event("select_version" = n, p, s) do
    { :noreply, socket } = Root.handle_event(n, p, s)
    { :noreply, prepare_documents(socket) }
  end
  def handle_event("new-document" = n, params, socket) do
    params =
      params
      |> Map.put(:parent, UserDocs.Users.get_team!(socket.assigns.current_team_id, socket, state_opts()))
      |> Map.put(:projects, socket.assigns.data.projects)

    Root.handle_event(n, params, socket)
  end
  def handle_event("new-document-version" = n, %{ "document-id" => id }, socket) do
    params =
      %{}
      |> Map.put(:document_id, String.to_integer(id))
      |> Map.put(:version_id, socket.assigns.current_version_id)
      |> Map.put(:documents, socket.assigns.data.documents)
      |> Map.put(:versions, socket.assigns.data.versions)

    Root.handle_event(n, params, socket)
  end
  def handle_event(n, p, s), do: Root.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %DocumentVersion{}} = sub_data, socket) do
    { :noreply, socket } = Root.handle_info(sub_data, socket)
    { :noreply, prepare_documents(socket) }
  end
  def handle_info(%{topic: _, event: _, payload: %Document{}} = sub_data, socket) do
    { :noreply, socket } = Root.handle_info(sub_data, socket)
    { :noreply, prepare_documents(socket) }
  end
  def handle_info(n, s), do: Root.handle_info(n, s)

  defp document_versions(_document, document_versions) do
    opts = [ data_type: :list, strategy: :by_item ]
    StateHandlers.list(document_versions, DocumentVersion, opts)
  end

  defp load_documents(socket) do
    Documents.load_documents(socket, state_opts())
  end

  defp load_document_versions(socket) do
    IO.inspect("Loading document versions")
    opts =
      state_opts()
      |> Keyword.put(:filters, %{team_id: socket.assigns.current_user.default_team_id})

    Documents.load_document_versions(socket, opts)
    |> IO.inspect()
  end

  defp prepare_documents(socket) do
    opts =
      state_opts()
      |> Keyword.put(:filter, { :project_id, socket.assigns.current_project_id })
      |> Keyword.put(:preloads, [ :document_versions ])

    assign(socket, :documents, Documents.list_documents(socket, opts))
  end

  defp projects_select_list(socket) do
    projects = socket.assigns.data.projects
    assign(socket, :projects_select, UserDocs.Helpers.select_list(projects, :name, false))
  end

  defp state_opts() do
    Defaults.state_opts()
    |> Keyword.put(:location, :data)
  end
end
