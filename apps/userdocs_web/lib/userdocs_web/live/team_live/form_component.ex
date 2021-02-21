defmodule UserDocsWeb.TeamLive.FormComponent do
  use UserDocsWeb, :live_component

  use UserdocsWeb.LiveViewPowHelper
  alias UserDocsWeb.Layout

  alias UserDocs.Users
  alias UserDocs.Helpers


  @impl true
  def update(%{team: team} = assigns, socket) do
    IO.puts("update")
    changeset = Users.change_team(team)
    users_select =
      Users.list_users(assigns, assigns.state_opts)
      |> Helpers.select_list(:email, false)

    IO.inspect(users_select)
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
      |> assign(:users_select_options, users_select)
    }
  end

  @impl true
  def handle_event("validate", %{"team" => team_params}, socket) do
    changeset =
      socket.assigns.team
      |> Users.change_team(team_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"team" => team_params}, socket) do
    save_team(socket, socket.assigns.action, team_params)
  end

  defp save_team(socket, :edit, team_params) do
    case Users.update_team(socket.assigns.team, team_params) do
      {:ok, _team} ->
        {:noreply,
         socket
         |> put_flash(:info, "Team updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_team(socket, :new, team_params) do
    case Users.create_team(team_params) do
      {:ok, _team} ->
        {:noreply,
         socket
         |> put_flash(:info, "Team created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
