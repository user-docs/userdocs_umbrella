defmodule UserDocsWeb.LiveHelpers do
  import Phoenix.LiveView.Helpers

  alias Phoenix.LiveView

  @doc """
  Renders a component inside the `UserDocsWeb.ModalComponent` component.

  The rendered modal receives a `:return_to` option to properly update
  the URL when the modal is closed.

  ## Examples

      <%= live_modal @socket, UserDocsWeb.TeamUserLive.FormComponent,
        id: @team_user.id || :new,
        action: @live_action,
        team_user: @team_user,
        return_to: Routes.team_user_index_path(@socket, :index) %>
  """
  def live_modal(socket, component, opts) do
    path = Keyword.fetch!(opts, :return_to)
    modal_opts = [
      id: :modal,
      return_to: path,
      component: component,
      opts: opts
    ]
    live_component(socket, UserDocsWeb.ModalComponent, modal_opts)
  end

  @spec live_footer(Phoenix.LiveView.Socket.t(), any, any) :: Phoenix.LiveView.Component.t()
  def live_footer(socket, component, opts) do
    type = Keyword.fetch!(opts, :type)
    struct = Keyword.fetch!(opts, :struct)

    footer_opts = [
      id: Keyword.fetch!(opts, :id),
      title: Keyword.fetch!(opts, :title),
      hidden: Keyword.fetch!(opts, :hidden),
      component: component,
      action: :show,
      opts: [ {type, struct} | opts ]
    ]
    live_component(socket, UserDocsWeb.FooterComponent, footer_opts)
  end

  def live_group(socket, show_component, form_component, opts) do
    opts = [
      id: Keyword.fetch!(opts, :id),
      type: Keyword.fetch!(opts, :type),
      parent_type: Keyword.fetch!(opts, :parent_type),
      struct: Keyword.fetch!(opts, :struct),
      objects: Keyword.fetch!(opts, :objects),
      title: Keyword.fetch!(opts, :title),
      parent: Keyword.fetch!(opts, :parent),
      show: show_component,
      form: form_component,
      opts: opts
    ]
    live_component(socket, UserDocsWeb.GroupComponent, opts)
  end

  def live_show(socket, component, opts) do
    modal_opts = [
      id: Keyword.fetch!(opts, :id),
      component: component,
      object: Keyword.fetch!(opts, :object),
      opts: opts
    ]
    live_component(socket, UserDocsWeb.ShowComponent, modal_opts)
  end

  def maybe_push_redirect(socket = %{assigns: %{return_to: return_to}}) do
    LiveView.push_redirect(socket, to: return_to)
  end
  def maybe_push_redirect(socket), do: socket
end
