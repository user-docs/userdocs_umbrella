defmodule UserDocsWeb.ProjectLive.Show do
  use UserDocsWeb, :live_view

  use UserdocsWeb.LiveViewPowHelper

  alias UserDocs.Projects

  alias UserDocsWeb.ComposableBreadCrumb
  alias UserDocsWeb.Defaults
  alias UserDocsWeb.Root

  def types() do
    [
      UserDocs.Projects.Project
    ]
  end

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, types())
      |> initialize()
    }
  end

  def initialize(%{assigns: %{auth_state: :logged_in}} = socket) do
    opts = Defaults.state_opts(socket)

    socket
    |> assign(:modal_action, :show)
    |> assign(:state_opts, opts)
  end
  def initialize(socket), do: socket

  @impl true
  def handle_params(%{"id" => id}, _, socket) do
    project = Projects.get_project!(String.to_integer(id))
    {
      :noreply,
      socket
      |> assign(:page_title, page_title(socket.assigns.live_action))
      |> assign(:project, project)
    }
  end

  defp page_title(:show), do: "Show Project"
  defp page_title(:edit), do: "Edit Project"

  @impl true
  def handle_info(n, s), do: Root.handle_info(n, s)

  @impl true
  def handle_event(n, p, s), do: Root.handle_event(n, p, s)
end
