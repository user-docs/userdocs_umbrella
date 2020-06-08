defmodule UserDocsWeb.AnnotationLiveTest do
  use UserDocsWeb.ConnCase

  import Phoenix.LiveViewTest

  alias UserDocs.Web

  @create_attrs %{description: "some description", label: "some label", name: "some name"}
  @update_attrs %{description: "some updated description", label: "some updated label", name: "some updated name"}
  @invalid_attrs %{description: nil, label: nil, name: nil}

  defp fixture(:annotation) do
    {:ok, annotation} = Web.create_annotation(@create_attrs)
    annotation
  end

  defp create_annotation(_) do
    annotation = fixture(:annotation)
    %{annotation: annotation}
  end

  describe "Index" do
    setup [:create_annotation]

    test "lists all annotations", %{conn: conn, annotation: annotation} do
      {:ok, _index_live, html} = live(conn, Routes.annotation_index_path(conn, :index))

      assert html =~ "Listing Annotations"
      assert html =~ annotation.description
    end

    test "saves new annotation", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index))

      assert index_live |> element("a", "New Annotation") |> render_click() =~
               "New Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :new))

      assert index_live
             |> form("#annotation-form", annotation: @invalid_attrs)
             |> render_change() =~ "can&apos;t be blank"

      {:ok, _, html} =
        index_live
        |> form("#annotation-form", annotation: @create_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.annotation_index_path(conn, :index))

      assert html =~ "Annotation created successfully"
      assert html =~ "some description"
    end

    test "updates annotation in listing", %{conn: conn, annotation: annotation} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index))

      assert index_live |> element("#annotation-#{annotation.id} a", "Edit") |> render_click() =~
               "Edit Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :edit, annotation))

      assert index_live
             |> form("#annotation-form", annotation: @invalid_attrs)
             |> render_change() =~ "can&apos;t be blank"

      {:ok, _, html} =
        index_live
        |> form("#annotation-form", annotation: @update_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.annotation_index_path(conn, :index))

      assert html =~ "Annotation updated successfully"
      assert html =~ "some updated description"
    end

    test "deletes annotation in listing", %{conn: conn, annotation: annotation} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index))

      assert index_live |> element("#annotation-#{annotation.id} a", "Delete") |> render_click()
      refute has_element?(index_live, "#annotation-#{annotation.id}")
    end
  end

  describe "Show" do
    setup [:create_annotation]

    test "displays annotation", %{conn: conn, annotation: annotation} do
      {:ok, _show_live, html} = live(conn, Routes.annotation_show_path(conn, :show, annotation))

      assert html =~ "Show Annotation"
      assert html =~ annotation.description
    end

    test "updates annotation within modal", %{conn: conn, annotation: annotation} do
      {:ok, show_live, _html} = live(conn, Routes.annotation_show_path(conn, :show, annotation))

      assert show_live |> element("a", "Edit") |> render_click() =~
               "Edit Annotation"

      assert_patch(show_live, Routes.annotation_show_path(conn, :edit, annotation))

      assert show_live
             |> form("#annotation-form", annotation: @invalid_attrs)
             |> render_change() =~ "can&apos;t be blank"

      {:ok, _, html} =
        show_live
        |> form("#annotation-form", annotation: @update_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.annotation_show_path(conn, :show, annotation))

      assert html =~ "Annotation updated successfully"
      assert html =~ "some updated description"
    end
  end
end
