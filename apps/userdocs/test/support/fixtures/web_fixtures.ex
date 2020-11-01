defmodule UserDocs.WebFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `UserDocs.Auth` context.
  """

  alias UserDocs.Web

  def page() do
    {:ok, object } =
      page_attrs(:valid)
      |> Web.create_page()
    object
  end

  def element(page, strategy) do
    {:ok, object } =
      element_attrs(:valid)
      |> Map.put(:page_id, page.id)
      |> Map.put(:strategy_id, strategy.id)
      |> Web.create_element()
    object
  end

  def strategy() do
    {:ok, strategy } =
      strategy_attrs(:valid)
      |> Web.create_strategy()
      strategy
  end

  def annotation(page) do
    {:ok, annotation } =
      annotation_attrs(:valid)
      |> Map.put(:page_id, page.id)
      |> Web.create_annotation()
    annotation
  end

  def annotation_type(name \\ :badge) do
    {:ok, annotation } =
      annotation_type_attrs(:valid, name)
      |> Web.create_annotation_type()
    annotation
  end

  def page_attrs(:valid) do
    %{
      url: "some url",
      version_id: ""
    }
  end

  def element_attrs(:valid) do
    %{
      name: UUID.uuid4(),
      selector: UUID.uuid4()
    }
  end

  def strategy_attrs(:valid) do
    %{
      name: "strategy"
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
