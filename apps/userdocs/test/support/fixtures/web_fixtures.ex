defmodule UserDocs.WebFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `UserDocs.Auth` context.
  """

  alias UserDocs.Projects

  alias UserDocs.Web
  alias UserDocs.Web.Page
  alias UserDocs.Web.Strategy
  alias UserDocs.Web.AnnotationType
  alias UserDocs.Web.Annotation
  alias UserDocs.Web.Element
  alias UserDocs.Web.Strategy


  def page(project_id \\ nil) do
    {:ok, object } =
      page_attrs(:valid, project_id)
      |> Web.create_page()
    object
  end

  def element(page_id, strategy_id) when is_integer(page_id) and is_integer(strategy_id) do
    {:ok, object } =
      element_attrs(:valid, page_id, strategy_id)
      |> Web.create_element()
    object
  end

  def element(page, strategy) do
    element(page.id, strategy.id)
  end

  def strategy() do
    {:ok, strategy } =
      strategy_attrs(:valid)
      |> Web.create_strategy()
      strategy
  end

  def annotation(page_id) when is_integer(page_id) do
    {:ok, annotation } =
      annotation_attrs(:valid)
      |> Map.put(:page_id, page_id)
      |> Web.create_annotation()
    annotation
  end

  def annotation(%Page{} = page) do
    annotation(page.id)
  end

  def annotation_type(name \\ :badge) do
    {:ok, annotation } =
      annotation_type_attrs(:valid, name)
      |> Web.create_annotation_type()
    annotation
  end

  def all_valid_annotation_types() do
    UserDocs.WebFixtures.AnnotationTypes.data()
    |> Enum.map(
      fn(st) ->
        { :ok, annotation_type } = Web.create_annotation_type(st)
        annotation_type
      end
    )
  end

  def page_attrs(:valid, project_id \\ nil) do
    %{
      url: "some url",
      name: UUID.uuid4(),
      project_id: project_id
    }
  end

  def element_attrs(:valid, page_id, strategy_id) do
    %{
      name: UUID.uuid4(),
      selector: UUID.uuid4(),
      page_id: page_id,
      strategy_id: strategy_id
    }
  end

  def element_attrs(:invalid, page_id, strategy_id) do
    %{
      name: nil,
      selector: nil,
      page_id: page_id,
      strategy_id: strategy_id
    }
  end

  def strategy_attrs(:valid) do
    %{
      name: "css"
    }
  end

  def annotation_attrs(:valid) do
    %{
      label: UUID.uuid4(),
      name: UUID.uuid4()
    }
  end

  def annotation_type_attrs(:valid, :outline) do
    %{
      args: ["color", "thickness"],
      name: "Outline"
    }
  end
  def annotation_type_attrs(:valid, :badge) do
    %{
      args: ["x_orientation", "y_orientation", "size", "label", "color", "x_offset", "y_offset", "font_size"],
      name: "Badge"
    }
  end

end
