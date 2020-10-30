defmodule UserDocs.Automation.Step.ChangeHandler do

  require Logger

  alias UserDocsWeb.LiveHelpers

  alias UserDocs.Web
  alias UserDocs.Web.Page
  alias UserDocs.Web.Element
  alias UserDocs.Automation
  alias UserDocs.Documents

  alias UserDocs.Automation.Step
  alias UserDocs.Automation.Step.Name

  alias UserDocs.Web.Annotation

  def execute(%{order: order}, state) do
    Logger.debug("Handling a change to order: #{order}")
    %{
      current_object:
        state.current_object
        |> Map.put(:order, order)
        |> (&(Map.put(&1, :name, Name.execute(&1)))).(),
    }
  end
  def execute(%{step_type_id: step_type_id}, state) do
    Logger.debug("Handling a change to step type id: #{step_type_id}")
    step_type = Automation.get_step_type!(state.data, step_type_id)
    IO.puts("Changing to step type #{step_type.name}")

    %{
      current_object:
        state.current_object
        |> Map.put(:step_type, step_type)
        |> Map.put(:step_type_id, step_type_id)
        |> (&(Map.put(&1, :name, Name.execute(&1)))).(),

      enabled_step_fields:
        LiveHelpers.enabled_fields(state.data.step_types, step_type_id)
    }
  end
  def execute(%{page_reference: page_reference}, state) do
    Logger.debug("Handling a change to url mode: #{page_reference}")
    %{
      current_object:
        Map.put(state.current_object, :page_reference, page_reference)
    }
  end
  def execute(%{annotation_id: annotation_id}, state) do
    Logger.debug("Handling a change to annotation id: #{annotation_id}")
    annotation = Web.get_annotation!(state.data, annotation_id)
    content = Documents.get_content!(
      annotation.content_id, %{ content_version: true }, %{}, state.data.content)

    { :ok, new_step } =
      Automation.update_step(state.step, %{ annotation_id: annotation_id })

    annotation =
      annotation
      |> Map.put(:content, content)

    new_step =
      new_step
      |> Map.put(:annotation_id, annotation_id)
      |> Map.put(:annotation, annotation)
      |> (&(Map.put(&1, :name, Name.execute(&1)))).()

    %{
      current_object: new_step,

      changeset:
        state.changeset.data
        |> Map.put(:annotation_id, annotation_id)
        |> Map.put(:annotation, annotation)
        |> (&(Map.put(state.changeset, :data, &1))).(),

      step: new_step
    }
  end
  def execute(%{ annotation: %Annotation{} }, state) do
    Logger.debug("Handling a change to a new page")
    { :ok, step } =
      UserDocs.Automation.update_step_annotation_id(
        state.step, %{ annotation_id: nil })

    step = Map.put(step, :annotation, nil)
    changeset = Automation.change_step(step)

    new_annotation =
      Web.change_annotation(%Annotation{})

    new_changeset =
      Ecto.Changeset.put_assoc(changeset, :annotation, new_annotation)

    %{
      current_object: step,

      changeset: new_changeset,

      step: step
    }
  end

  def execute(%{element_id: element_id}, state) do
    Logger.debug("Handling a change to element id: #{element_id}")
    element = Web.get_element!(element_id, %{ strategy: true }, %{}, state.data)

    { :ok, new_step } =
      Automation.update_step(state.step, %{ element_id: element_id })

    new_step =
      new_step
      |> Map.put(:element, element)

    %{
      current_object: new_step,

      changeset:
        state.changeset.data
        |> Map.put(:element_id, element_id)
        |> Map.put(:element, element)
        |> (&(Map.put(state.changeset, :data, &1))).(),

      step: new_step
    }
  end
  def execute(%{ element: %Element{} }, state) do
    Logger.debug("Handling a change to a new page")
    { :ok, step } =
      UserDocs.Automation.update_step_element_id(
        state.step, %{ element_id: nil })

    step = Map.put(step, :element, nil)
    changeset = Automation.change_step(step)
    new_element = Web.change_element(%Element{})
    new_changeset =
      Ecto.Changeset.put_assoc(changeset, :element, new_element)

    %{
      current_object: step,

      changeset: new_changeset,

      step: step
    }
  end

  def execute(%{page_id: page_id}, state) do
    Logger.debug("Handling a change to page id: #{page_id}")
    page = Web.get_page!(page_id, %{}, %{}, state.data) # Fetch Page
    { :ok, new_step } =
      Automation.update_step(state.step, %{ page_id: page_id }) # Update name and page id

    %{
      current_object:
        new_step
        |> Map.put(:page, page),

      changeset:
        state.changeset.data
        |> Map.put(:page_id, page_id)
        |> Map.put(:page, page)
        |> (&(Map.put(state.changeset, :data, &1))).(),

      step: new_step
    }
  end
  def execute(%{ page: %Page{} }, state) do
    Logger.debug("Handling a change to a new page")
    { :ok, step } =
      UserDocs.Automation.update_step_page_id(state.step, %{ page_id: nil })

    step = Map.put(step, :page, nil)
    changeset = UserDocs.Automation.change_step(step)
    new_page = UserDocs.Web.change_page(%UserDocs.Web.Page{})
    new_changeset = Ecto.Changeset.put_assoc(changeset, :page, new_page)

    %{
      current_object: step,

      changeset: new_changeset,

      step: step
    }
  end

  def execute(%{annotation: %{ changes: %{ content_id: _ }} = annotation}, state) do
    Logger.debug("Handling a change to the nested annotations content id")
    %{ annotation: annotation } = Annotation.ChangeHandler.execute(annotation.changes, state)
    %{
      current_object:
        Map.put(state.current_object, :annotation, annotation),

      changeset:
        state.changeset.data
        |> Map.put(:annotation, annotation)
        |> (&(Map.put(state.changeset, :data, &1))).(),

      step:
        state.step
        |> Map.put(:annotation, annotation)
    }
  end

  def execute(%{annotation: %{ changes: %{annotation_type_id: annotation_type_id}} = annotation}, state) do
    Logger.debug("Handling a change to annotation_type_id in the annotation type: annotation_type_id")
    changes = Annotation.ChangeHandler.execute(annotation.changes, state)
    %{
      enabled_annotation_fields:
        LiveHelpers.enabled_fields(
          state.data.annotation_types,
          annotation_type_id),

      current_object:
        state.current_object
        |> Map.put(:annotation, changes.annotation)
        |> (&(Map.put(&1, :name, Name.execute(&1)))).(),
    }
  end

  def execute(%{annotation: annotation}, state) do
    Logger.debug("Handling a change to the nested annotation:")
    changes = Annotation.ChangeHandler.execute(annotation.changes, state)
    %{
      current_object:
        Map.put(state.current_object, :annotation, changes.annotation)
    }
  end

  def execute(object, socket) do
    IO.puts("No changes we need to respond to on the step form")
    %{}
  end
end
