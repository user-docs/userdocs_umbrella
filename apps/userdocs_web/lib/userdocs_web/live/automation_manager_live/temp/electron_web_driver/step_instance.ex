defmodule UserDocsWeb.ElectronWebDriver.StepInstance do
  alias UserDocs.AutomationManager
  alias UserDocs.Jobs
  alias UserDocs.Jobs.StepInstance

  def execute(socket, step_id) when is_integer(step_id) do
    { :ok, step_instance } =
      AutomationManager.get_step!(step_id)
      |> Jobs.create_step_instance_from_step()

    socket
    |> execute(step_instance)
  end

  def execute(socket, %StepInstance{} = step_instance) do
    formatted_step_instance = Jobs.format_step_instance_for_export(step_instance)
    socket
    |> Phoenix.LiveView.push_event("execute", %{ step_instance: formatted_step_instance })
  end
end
