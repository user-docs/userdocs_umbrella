defmodule UserDocs.Repo.Migrations.AlterUserAddImagePath do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :image_path, :string
    end
  end
end
