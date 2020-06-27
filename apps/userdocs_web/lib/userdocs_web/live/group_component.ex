defmodule UserDocsWeb.GroupComponent do
    use UserDocsWeb, :live_component

    alias UserDocsWeb.Layout

    @impl true
    def render(assigns) do
      ~L"""
        <div class="card" id="<%= @id %>">
          <header class="card-header">
            <p class="card-header-title">
              <%= @title %>
            </p>
            <a
              class="card-header-icon"
              phx-click="expand"
              phx-target="<%= @myself %>"
              aria-label="more options">
              <span class="icon" >
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content <%= Layout.is_hidden?(assigns) %>">
            <div class="content">
              <%= for(object <- @objects) do %>
                <%= live_show(@socket, @show,
                  id: Atom.to_string(@type) <> "-"
                    <> Integer.to_string(object.id)
                    <> "-show",
                  object: object) %>
              <% end %>
            </div>
          </div>
          <%= live_footer(@socket, @form,
            type: @type,
            struct: @struct,
            parent: @parent,
            parent_type: @parent_type,
            id: Atom.to_string(@parent_type) <> "-"
              <> Integer.to_string(@parent.id) <> "-"
              <> Atom.to_string(@type)
              <> "-form-new",
            title: @title,
            hidden: Layout.is_hidden?(assigns)
          ) %>
        </div>
      """
    end

    @impl true
    def mount(socket) do
      socket = assign(socket, :expanded, false)
      socket = assign(socket, :footer_action, false)
      {:ok, socket}
    end

    @impl true
    def update(assigns, socket) do
      socket = assign(socket, assigns)
      {:ok, socket}
    end

    @impl true
    def handle_event("expand", _, socket) do
      socket = assign(socket, :expanded, not socket.assigns.expanded)
      {:noreply, socket}
    end
  end
