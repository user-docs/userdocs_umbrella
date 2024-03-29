defmodule UserDocs.Repo.Migrations.CreateStrategies do
  use Ecto.Migration

  def change do
    create table(:strategies) do
      add :name, :string
    end

    create unique_index(:strategies, [:name])
  end
end
