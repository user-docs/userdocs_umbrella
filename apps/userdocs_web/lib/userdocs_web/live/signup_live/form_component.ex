defmodule UserDocsWeb.SignupLive.FormComponent do
  use UserDocsWeb, :live_component

  alias UserDocs.Users

  @impl true
  def update(%{user: user, trigger_submit: trigger_submit } = assigns, socket) do
    changeset = Users.change_user(user)

    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
      |> assign(:trigger_submit, trigger_submit)
    }
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      socket.assigns.user
      |> Users.change_user_signup(user_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"user" => user_params}, socket) do
    case Users.validate_signup(user_params) do
      {:ok, changeset} ->
        {:ok, user} = Ecto.Changeset.apply_action(changeset, :insert)
        {
          :noreply,
          socket
          |> assign(:user, user)
          |> assign(:changeset, changeset)
          |> assign(:trigger_submit, true)
        }

      {:error, changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_user(socket, :edit, user_params) do
    case Users.update_user(socket.assigns.user, user_params) do
      {:ok, _user} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "User updated successfully")
          |> push_redirect(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_user(socket, :new, user_params) do
    case Users.create_user(user_params) do
      {:ok, user} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "User created successfully")
          |> assign(:user, user)
          |> push_redirect(to: Routes.signup_index_path(socket, :edit))
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
