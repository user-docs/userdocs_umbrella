defmodule UserDocsWeb.PageLive.FormComponent do
  use UserDocsWeb, :live_component
  alias UserDocs.Web
  alias UserDocs.Projects
  alias UserDocsWeb.LiveHelpers
  alias UserDocsWeb.DomainHelpers

  @impl true
  def update(%{page: page} = assigns, socket) do
    IO.puts("updating Page form")
    IO.inspect(assigns)
    changeset = Web.change_page(page)

    {:ok,
     socket
     |> assign(assigns)
     |> assign(:available_versions, available_versions())
     |> assign(:changeset, changeset)}
  end

  @impl true
  def handle_event("validate", %{"page" => page_params}, socket) do
    changeset =
      socket.assigns.page
      |> Web.change_page(page_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"page" => page_params}, socket) do
    save_page(socket, socket.assigns.action, page_params)
  end

  defp save_page(socket, :edit, page_params) do
    case Web.update_page(socket.assigns.page, page_params) do
      {:ok, _page} ->
        {:noreply,
         socket
         |> put_flash(:info, "Page updated successfully")
         |> LiveHelpers.maybe_push_redirect()}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_page(socket, :new, page_params) do
    case Web.create_page(page_params) do
      {:ok, _page} ->
        {:noreply,
         socket
         |> put_flash(:info, "Page created successfully")
         |> LiveHelpers.maybe_push_redirect()}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp available_versions do
    Projects.list_versions()
  end
end
