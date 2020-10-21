defmodule UserDocs.Media.Screenshot do
  use Ecto.Schema
  import Ecto.Changeset

  alias UserDocs.Automation.Step
  alias UserDocs.Media.File

  schema "screenshots" do
    field :name, :string

    belongs_to :file, File
    belongs_to :step, Step

    timestamps()
  end

  @doc false
  def changeset(screenshot, attrs) do
    screenshot
    |> cast(attrs, [:name, :file_id, :step_id])
    |> foreign_key_constraint(:file_id)
    |> foreign_key_constraint(:step_id)
    |> unique_constraint(:step_id)
    |> validate_required([:name])
  end

  def safe(annotation, handlers \\ %{})
  def safe(screenshot = %UserDocs.Media.Screenshot{}, _handlers) do
    base_safe(screenshot)
  end
  def safe(nil, _), do: nil

  def base_safe(screenshot) do
    %{
      id: screenshot.id,
      name: screenshot.name
    }
  end
end
