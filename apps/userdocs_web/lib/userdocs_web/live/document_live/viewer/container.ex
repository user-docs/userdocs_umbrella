defmodule UserDocsWeb.DocubitLive.Viewer.Container do
  use UserDocsWeb, :live_component
  alias UserDocsWeb.DocubitLive.AddDocubitButton


  def render(assigns) do
    ~L"""
      <div class="container">
        <%= @inner_content.([]) %>
      </div>
    """
  end
end