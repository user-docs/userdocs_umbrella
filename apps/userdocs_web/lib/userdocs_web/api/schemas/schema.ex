defmodule UserDocsWeb.API.Schema do
  use Absinthe.Schema
  import_types UserDocsWeb.API.Schema.StepInstances
  import_types UserDocsWeb.API.Schema.Step
  import_types UserDocsWeb.API.Schema.Annotation
  import_types UserDocsWeb.API.Schema.Page
  import_types UserDocsWeb.API.Schema.StepType
  import_types UserDocsWeb.API.Schema.Element
  import_types UserDocsWeb.API.Schema.Screenshot
  import_types UserDocsWeb.API.Schema.Process
  import_types UserDocsWeb.API.Schema.Strategy
  import_types UserDocsWeb.API.Schema.AnnotationType
  import_types UserDocsWeb.API.Schema.Job
  import_types UserDocsWeb.API.Schema.ProcessInstance
  import_types UserDocsWeb.API.Schema.Error
  import_types UserDocsWeb.API.Schema.Warning

  alias UserDocsWeb.API.Resolvers

  query do

    @desc "Get a job"
    field :job, :job do
      arg :id, non_null(:id)
      resolve &Resolvers.Job.get_job!/3
    end

  end

  mutation do

    @desc "Update a Job"
    field :update_job, type: :job do
      arg :id, non_null(:id)
      arg :status, non_null(:string)
      arg :process_instances, list_of(:process_instance_input)
      arg :step_instances, list_of(:step_instance_input)
      resolve &Resolvers.Job.update_job/3
    end

    @desc "Update a Process Instance"
    field :update_process_instance, type: :process_instance do
      arg :id, non_null(:id)
      arg :status, non_null(:string)
      arg :step_instances, list_of(:step_instance_input)
      resolve &Resolvers.ProcessInstance.update_process_instance/3
    end

    @desc "Update a Step Instance"
    field :update_step_instance, type: :step_instance do
      arg :id, non_null(:id)
      arg :status, non_null(:string)
      arg :step, :step_input
      resolve &Resolvers.StepInstance.update_step_instance/3
    end

    @desc "Create a Screenshot"
    field :create_screenshot, type: :screenshot do
      arg :step_id, non_null(:id)
      arg :base64, non_null(:string)
      resolve &Resolvers.Screenshot.create_screenshot/3
    end

    @desc "Update a Screenshot"
    field :update_screenshot, type: :screenshot do
      arg :id, non_null(:id)
      arg :step_id, non_null(:id)
      arg :base64, non_null(:string)
      resolve &Resolvers.Screenshot.update_screenshot/3
    end

    @desc "Delete a Screenshot"
    field :delete_screenshot, type: :screenshot do
      arg :id, non_null(:id)
      resolve &Resolvers.Screenshot.delete_screenshot/3
    end

  end

    """
    @desc "Get process instances"
    field :process_instances, list_of(:process_instance) do
      resolve &Resolvers.ProcessInstance.list_process_instances/3
    end

    @desc "Get step instances"
    field :step_instances, list_of(:step_instance) do
      resolve &Resolvers.StepInstance.list_step_instances/3
    end

    @desc "Get a step instance"
    field :step_instance, :step_instance do
      arg :id, non_null(:id)
      resolve &Resolvers.StepInstance.get_step_instance!/3
    end

    @desc "Get a step"
    field :step, :step do
      arg :id, non_null(:id)
      resolve &Resolvers.Step.get_step!/3
    end

    @desc "Get an annotation"
    field :annotation, :annotation do
      arg :id, non_null(:id)
      resolve &Resolvers.Annotation.get_annotation!/3
    end

    @desc "Get a page"
    field :page, :page do
      arg :id, non_null(:id)
      resolve &Resolvers.Page.get_page!/3
    end

    @desc "Get a step_type"
    field :step_type, :step_type do
      arg :id, non_null(:id)
      resolve &Resolvers.StepType.get_step_type!/3
    end

    @desc "Get an element"
    field :element, :element do
      arg :id, non_null(:id)
      resolve &Resolvers.Element.get_element!/3
    end

    @desc "Get a screenshot"
    field :screenshot, :screenshot do
      arg :id, non_null(:id)
      resolve &Resolvers.Screenshot.get_screenshot!/3
    end

    @desc "Get a process"
    field :process, :process do
      arg :id, non_null(:id)
      resolve &Resolvers.Process.get_process!/3
    end

    @desc "Get a strategy"
    field :strategy, :strategy do
      arg :id, non_null(:id)
      resolve &Resolvers.Strategy.get_strategy!/3
    end

    @desc "Get an annotation_type"
    field :annotation_type, :annotation_type do
      arg :id, non_null(:id)
      resolve &Resolvers.AnnotationType.get_annotation_type!/3
    end
"""

end