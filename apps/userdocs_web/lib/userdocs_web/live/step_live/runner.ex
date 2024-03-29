defmodule UserDocsWeb.StepLive.Runner do
  @moduledoc false
  use UserDocsWeb, :live_component
  use Phoenix.HTML

  @impl true
  @spec mount(Phoenix.LiveView.Socket.t()) :: {:ok, Phoenix.LiveView.Socket.t()}
  def mount(socket) do
    {
      :ok,
      socket
      |> assign(:errors, [])
      |> assign(:status, :ok)
    }
  end

  @impl true
  def render(assigns) do
    ~L"""
    <%= if @display do %>
      <a class="navbar-item has-tooltip-left"
        id="<%= @id %>-runner"
        phx-click="execute-step"
        phx-value-id="<%= @step.id %>"
        phx-target="#automation-manager"
      >
        <span class="icon">
          <%= case @status do
            :ok -> content_tag(:i, "", [class: "fa fa-play-circle", aria_hidden: "true"])
            :failed -> content_tag(:i, "", [class: "fa fa-times", aria_hidden: "true"])
            :started -> content_tag(:i, "", [class: "fa fa-spinner", aria_hidden: "true"])
            :complete -> content_tag(:i, "", [class: "fa fa-check", aria_hidden: "true"])
          end %>
        </span>
      </a>
    <% end %>
    """
  end
end
