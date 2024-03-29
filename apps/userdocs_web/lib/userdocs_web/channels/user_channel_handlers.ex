defmodule UserDocsWeb.UserChannelHandlers do
  @moduledoc false
  require Logger

  def precheck(socket, subscription_user_id, socket_user_id) do
    if subscription_user_id == socket_user_id do
      :ok
    else
      :error
    end
  end

  def apply(socket, %{topic: "user:" <> _user_id, event: "presence_diff", payload: %{joins: _joins, leaves: _leaves}}) do
    IO.inspect("Presence diff")
    socket
  end

  def apply(socket, %{topic: "user:" <> _user_id, event: "event:browser_opened"}) do
    IO.inspect("root:event:browser_opened")
    PhoenixLiveSession.put_session(socket, "browser_opened", true)
  end
  def apply(socket, %{topic: "user:" <> _user_id, event: "event:user_opened_browser"}) do
    IO.inspect("root:event:user_opened_browser")
    PhoenixLiveSession.put_session(socket, "user_opened_browser", true)
  end
  def apply(socket, %{topic: "user:" <> _user_id, event: "event:browser_closed"}) do
    IO.inspect("root:event:browser_closed")
    PhoenixLiveSession.put_session(socket, "browser_opened", false)
  end
  def apply(socket, %{topic: "user:" <> _user_id, event: "event:user_closed_browser"}) do
    IO.inspect("root:event:user_opened_browser")
    PhoenixLiveSession.put_session(socket, "user_opened_browser", false)
  end

  def apply(socket, %{topic: "user:" <> _user_id, event: "command:clear_browser"}) do
    IO.inspect("root:command:clear_browser")
    socket
    |> PhoenixLiveSession.put_session("user_opened_browser", false)
    |> PhoenixLiveSession.put_session("browser_opened", false)
  end
  # These events are handled in the index/form, and can be "ignored" by the root
  def apply(socket, %{topic: "user:" <> _user_id, event: "event:browser_event"}), do: socket
  def apply(socket, %{topic: _, event: "command:" <> command, payload: _}) do
    IO.puts("UserChannelHandlers received an unhandled command: #{command}")
    socket
  end
  def apply(socket, %{topic: _, event: "event:" <> event, payload: _}) do
    IO.puts("UserChannelHandlers received an unhandled event: #{event}")
    socket
  end

  def apply(socket, %{topic: "user:" <> _user_id, event: "presence_state", payload: payload}) do
    IO.inspect("Presence state")
    update_session_with_joins(socket, payload)

    socket
  end

  def apply(socket, %{topic: topic, event: event, payload: payload}) do
    schema = case payload do
      %{objects: [object | _ ]} -> object.__meta__.schema
      object -> object.__meta__.schema
    end

    case Keyword.get(socket.assigns.state_opts, :types) do
      nil -> raise(RuntimeError, "Types not populated in calling subscribed view #{socket.view}")
      _ -> ""
    end

    case schema in socket.assigns.state_opts[:types] do
      true -> UserDocs.Subscription.handle_event(socket, event, payload, socket.assigns.state_opts)
      false -> socket
    end
  end

  def check_members(metas) do
    case Enum.count(metas) do
      count when count > 1 -> :warn
      _ -> :ok
    end
  end

  def update_session_with_joins(socket, presence_list) do
    socket
    |> maybe_update_electron_presence(presence_list)
  end

  def maybe_update_electron_presence(socket, %{"electron" => %{metas: metas}}) do
    case Enum.count(metas) do
      0 -> PhoenixLiveSession.put_session(socket, "electron_joined", false)
      1 -> PhoenixLiveSession.put_session(socket, "electron_joined", true)
      count when count > 1 ->
        socket
        |> Phoenix.LiveView.put_flash(:info, "Electron Desktop Instances Running")
        |> PhoenixLiveSession.put_session("electron_joined", true)
    end
  end
  def maybe_update_electron_presence(socket, _), do: socket
end
