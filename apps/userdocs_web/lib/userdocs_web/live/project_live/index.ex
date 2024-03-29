defmodule UserDocsWeb.ProjectLive.Index do
  use UserDocsWeb, :live_view

  require Logger

  use UserdocsWeb.LiveViewPowHelper

  alias UserDocs.Helpers
  alias UserDocs.Users
  alias UserDocs.Projects
  alias UserDocs.Projects.Project
  alias UserDocsWeb.ComposableBreadCrumb
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
    socket
    |> assign(:modal_action, :show)
    |> assign(:state_opts, socket.assigns.state_opts)
  end
  def initialize(socket), do: socket

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> prepare_edit(id)
    |> prepare_index(socket.assigns.current_team.id)
  end

  defp apply_action(socket, :new, _params) do
    user = Users.get_user!(socket.assigns.current_user.id, %{teams: true}, %{})
    socket
    |> assign(:page_title, "New Project")
    |> assign(:project, %Project{})
    |> assign(:teams_select_options, Helpers.select_list(user.teams, :name, false))
    |> assign(:strategies_select_options, strategies_select_options())
    |> prepare_index(socket.assigns.current_team.id)
  end

  defp apply_action(socket, :index, %{"team_id" => team_id}) do
    team = Users.get_team!(team_id, %{preloads: %{job: %{step_instances: true, process_instances: true}}})
    socket
    |> assign(:page_title, "Listing Projects")
    |> assign(:project, nil)
    |> assign(:current_team, team)
    |> prepare_index(team_id)
  end
  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Projects")
    |> assign(:project, nil)
    |> prepare_index(socket.assigns.current_team.id)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    project = Projects.get_project!(String.to_integer(id))
    {:ok, _} = Projects.delete_project(project)

    {
      :noreply,
      assign(socket, :projects, Projects.list_projects(%{}, %{team_id: socket.assigns.team_id}))
   }
  end
  def handle_event(n, p, s), do: Root.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %UserDocs.Users.User{} = user} = _sub_data, socket) do
    {
      :noreply,
      socket
      |> assign(:projects, Projects.list_projects(%{}, %{team_id: user.selected_team_id}))
      |> push_patch(to: Routes.project_index_path(socket, :index))
   }
  end
  def handle_info(n, p), do: Root.handle_info(n, p)

  defp prepare_index(socket, team_id) do
    Logger.debug("#{__MODULE__}.prepare_index issuing list_projects query")
    socket
    |> assign(:team_id, team_id)
    |> assign(:projects, Projects.list_projects(%{}, %{team_id: team_id}))
  end

  defp prepare_edit(socket, id) do
    Logger.debug("#{__MODULE__}.prepare_edit issuing get_user! and get_project! query")
    user = Users.get_user!(socket.assigns.current_user.id, %{teams: true}, %{})
    socket
    |> assign(:page_title, "Edit Project")
    |> assign(:project, Projects.get_project!(String.to_integer(id)))
    |> assign(:teams_select_options, Helpers.select_list(user.teams, :name, false))
    |> assign(:strategies_select_options, strategies_select_options())
  end

  defp strategies_select_options do
    UserDocs.Web.list_strategies()
    |> Helpers.select_list(:name, true)
  end
end
