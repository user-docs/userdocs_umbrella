defmodule UserDocs.SubscriptionTest do
  use UserDocs.DataCase

  describe "automation" do

    alias UserDocs.Subscription
    alias UserDocs.Automation
    alias UserDocs.Automation.Step

    def step_attrs(step_id, annotation_id, content_id) do
      %{
        id: step_id,
        order: 1,
        name: "test",
        annotation:
        %{
          id: annotation_id,
          name: "test",
          content: %{ id: content_id, name: "test" }
        }
      }
    end

    def step_fixture() do
      strategy = UserDocs.WebFixtures.strategy()
      step_type = UserDocs.AutomationFixtures.step_type()
      user = UserDocs.UsersFixtures.user()
      team = UserDocs.UsersFixtures.team()
      team_user = UserDocs.UsersFixtures.team_user(user.id, team.id)
      project = UserDocs.ProjectsFixtures.project(team.id)
      version = UserDocs.ProjectsFixtures.version(project.id)
      page = UserDocs.WebFixtures.page(version.id)
      content = UserDocs.DocumentVersionFixtures.content(team)
      element = UserDocs.WebFixtures.element(page, strategy)
      |> Map.put(:page, page)
      |> Map.put(:strategy, strategy)
      process = UserDocs.AutomationFixtures.process(version.id)
      annotation = UserDocs.WebFixtures.annotation(page)
      |> Map.put(:content, content)
      step = UserDocs.AutomationFixtures.step(page.id, process.id, element.id, annotation.id, step_type.id)
      step
      |> Map.put(:annotation, annotation)
      |> Map.put(:element, element)
      |> Map.put(:page, page)
      |> Map.put(:step_type, step_type)
      |> Map.put(:screenshot, UserDocs.MediaFixtures.screenshot(step.id))
      |> Map.put(:process, nil)
    end

    test "check_changes" do
      step = step_fixture
      attrs = step_attrs(step.id, step.annotation.id, step.annotation.content.id)
      changeset = Automation.change_step(step, attrs)
      result = Subscription.check_changes(changeset)
      assert result.annotation.changes.content.action == :update
    end

    test "traverse_changes" do
      step = step_fixture
      attrs = step_attrs(step.id, step.annotation.id, step.annotation.content.id)
      changeset = Automation.change_step(step, attrs)
      broadcast_actions = Subscription.check_changes(changeset)
      { :ok, updated_step } = Repo.update(changeset)
      result = Subscription.traverse_changes(updated_step, broadcast_actions)
      { first_action, first_object } = result |> Enum.at(0)
      { second_action, second_object } = result |> Enum.at(1)
      assert first_action == :update
      assert second_action == :update
      assert first_object.__struct__ == UserDocs.Documents.Content
      assert second_object.__struct__ == UserDocs.Web.Annotation
    end

    test "broadcast_result" do
      step = step_fixture
      attrs = step_attrs(step.id, step.annotation.id, step.annotation.content.id)
      changeset = Automation.change_step(step, attrs)
      { :ok, updated_step } = Repo.update(changeset)
      broadcast_actions = Subscription.check_changes(changeset)
      result = Subscription.broadcast_result(updated_step, changeset, [])
    end
  end
end