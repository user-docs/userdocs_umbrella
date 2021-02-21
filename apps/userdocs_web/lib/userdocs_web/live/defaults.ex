defmodule UserDocsWeb.Defaults do
  def state_opts(type), do: Keyword.put(state_opts(), :type, type)
  def state_opts() do
    [
      data_type: :list,
      strategy: :by_type,
      loader: &Phoenix.LiveView.assign/3,
      location: :data
    ]
  end

  def base_opts(types) do
    state_opts()
    |> Keyword.put(:types, types)
  end
  def base_opts(), do: state_opts()

  def opts(%{ assigns: assigns} = socket, types \\ []) do
    base_opts(types)
    |> Keyword.put(:broadcast, true)
    |> assign_channel(socket)
    |> Keyword.put(:broadcast_function, &UserDocsWeb.Endpoint.broadcast/3)
  end

  def assign_channel(opts, socket) do
    case channel(socket) do
      nil -> opts
      channel -> Keyword.put(opts, :channel, channel)
    end
  end

  def channel(%{ assigns: %{ current_team_id: id }}), do: "team-" <> Integer.to_string(id)
  def channel(_), do: nil
end
