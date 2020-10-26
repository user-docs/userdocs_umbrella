defmodule ProcessAdministratorWeb.ProcessLive.Messages do

  alias UserDocs.Automation.Process, as: Process

  alias ProcessAdministratorWeb.DomainHelpers, as: Helpers

  def new_modal_menu(socket) do
    %{ target: "ModalMenus" }
    |> init(socket)
    |> new(socket)
  end

  defp new(message, socket) do
    message
    |> Map.put(:object, %Process{})
    |> Map.put(:action, :new)
    |> Map.put(:title, "New Process")
  end

  defp init(message, socket) do
    select_lists = %{
      versions:
        socket.assigns.versions
        |> Enum.filter(fn(v) -> v.project_id == socket.assigns.current_project.id end)
        |> Helpers.select_list_temp(:name, false),
    }

    message
    |> Map.put(:type, :process)
    |> Map.put(:parent, socket.assigns.current_project)
    |> Map.put(:select_lists, select_lists)
  end
end
