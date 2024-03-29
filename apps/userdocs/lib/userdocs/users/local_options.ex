defmodule UserDocs.Users.LocalOptions do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  alias UserDocs.Users.Override

  @derive {Jason.Encoder, only: [:image_path, :max_retries, :user_data_dir_path, :chrome_path, :browser_timeout]}
  schema "local_options" do
    field :image_path, :string
    field :max_retries, :integer
    field :browser_timeout, :integer
    field :user_data_dir_path, :string
    field :chrome_path, :string
    field :css, :string
    embeds_many :overrides, Override, on_replace: :raise
  end

  @doc false
  def changeset(local_options, attrs) do
    local_options
    |> cast(attrs, [:image_path, :max_retries, :user_data_dir_path, :css, :chrome_path, :browser_timeout])
    |> cast_embed(:overrides)
  end
end
