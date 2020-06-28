defmodule UserDocsWeb.ProcessLive.ShowComponent do
  use UserDocsWeb, :live_component

  alias UserDocs.Automation

  alias UserDocsWeb.Layout
  alias UserDocsWeb.StepLive.ShowComponent
  alias UserDocsWeb.StepLive.FormComponent

  @impl true
  def render(assigns) do
    ~L"""
    <%= live_group(@socket, ShowComponent, FormComponent,
      [
        title: "Steps",
        type: :step,
        parent_type: :process,
        struct: %Automation.Step{},
        objects: @object.steps,
        return_to: Routes.step_index_path(@socket, :index),
        id: "process-"
          <> Integer.to_string(@object.id)
          <> "-steps",
        parent: @object
      ]
    ) %>
    """
  end
end
