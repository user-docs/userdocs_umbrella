const { GraphQLClient, gql } = require('graphql-request')

let Hooks = {}


Hooks.authenticationEvents = {
  mounted() {
    this.handleEvent("login-succeeded", (message) => {
      const browserStatus = {server: "not_running", client: "not_running", runner: "not_running"}
      if (!window.userdocs) this.pushEventTo('#services-status-hook', "put-services-status", browserStatus)
      else {
        window.userdocs.putTokens(message)
          .then(result => {
            if (result.status == "ok") {
              window.userdocs.startServices()
                .then(result => {
                  this.pushEventTo('#services-status-hook', "put-services-status", result)
                })
            }
          })
      }
    })
  }
}

Hooks.configurationV2 = {
  mounted() {
    this.handleEvent("get-configuration", (message) => {
      CLIENT.request(configurationQuery)
        .then(result => {
          this.pushEventTo('#configuration-v2-hook', "configuration-response", result)
        })
    }),
    this.handleEvent("put-configuration", (message) => {
      CLIENT.request(CONFIGURATION_MUTATION, message)
        .then(result => {
          this.pushEventTo('#configuration-v2-hook', "configuration-saved", result)
        })
    })
  }
}

Hooks.testSelector = {
  mounted() {
    this.handleEvent("test_selector", (message) => {
      window.userdocs.testSelector(message)
    })
  }
};

Hooks.fileTransfer = {
  mounted() {
    this.el.addEventListener("screenshot", e => {
      this.pushEventTo('#screenshot-handler-component', "create_screenshot", e.detail)
    })
  }
};

Hooks.configuration = {
  mounted() {
    this.handleEvent("configure", (message) => {
      window.userdocs.configure(message)
    })
  }
}















Hooks.selectorTransfer = {
  mounted() {
    this.el.addEventListener("selector", e => {
      this.pushEventTo('#selector-handler', "transfer_selector", e.detail)
    })
  }
};
Hooks.jobRunner = {
  mounted() {
    this.handleEvent("message", (message) => {
      const type = message.type
      if (type === 'process') {
        const thisProcessId =  this.el.attributes["phx-value-process-id"].value
        const messageProcessId = message.payload.process.id

        if(thisProcessId == messageProcessId) {
          chrome.storage.local.get(['activeTabId', 'activeWindowId'], function (result) {
            message.payload.activeTabId = result.activeTabId
            message.payload.activeWindowId = result.activeWindowId
            handle_message(message, { environment: 'extension' })
          })
        }
      }
    }),
    this.el.addEventListener("message", e => {
      var payload = {
        status: e.detail.status,
        error: e.detail.error
      }
      this.pushEventTo('#' + e.detail.element_id, "update_status", payload)
    })
  }
};

Hooks.CopySelector = {
  mounted: function mounted() {
    this.el.addEventListener("click", function (e) {      
      var element = e.target.closest('button');
      const selector = document.getElementById("selector-transfer-field").value;
      const strategy = document.getElementById("strategy-transfer-field").value;

      const selectorFieldId = element.attributes["selector"].value;
      const strategyFieldId = element.attributes["strategy"].value;

      const targetSelectorField = document.getElementById(selectorFieldId);
      const targetStrategyField = document.getElementById(strategyFieldId);

      targetSelectorField.value = selector;
      targetStrategyField.value = strategy;
    });
  }
};

/*
Hooks.servicesStatus = {
  mounted() {
    this.handleEvent("get-services-status", () => {
      const browserStatus = {server: "not_running", client: "not_running", runner: "not_running"}
      if (!window.userdocs) this.pushEventTo('#services-status-hook', "put-services-status", browserStatus)
      else {
        window.userdocs.serviceStatus()
          .then(result => {
            this.pushEventTo('#services-status-hook', "put-services-status", result)
          })
      }
    }),
    this.el.addEventListener("put-services-status", (message) => {
      this.pushEventTo("#services-status-hook", "put-services-status", message.detail)
    })
  }
}
var PORT
var CLIENT
const configurationQuery = gql`
  query Query {
    configuration {
      maxRetries
      imagePath
      userDataDirPath
      css
      overrides {
        projectId
        url
      }
    }
  }
`

const CONFIGURATION_MUTATION = gql`
  mutation Mutation(
    $maxRetries: Int!, 
    $imagePath: String!, 
    $userDataDirPath: String!, 
    $css: String!, 
    $overrides: [OverrideInput]
  ) {
    configuration(
      maxRetries: $maxRetries, 
      imagePath: $imagePath, 
      userDataDirPath: $userDataDirPath, 
      css: $css, 
      overrides: $overrides
    ) {
      maxRetries: maxRetries
      imagePath: imagePath
      userDataDirPath: userDataDirPath
      css: css
      overrides: overrides {
        projectId
        url
      }
    }
  }

`

try {
  window.userdocs.port()
    .then(port => {
      PORT = port
      CLIENT = new GraphQLClient(`http://localhost:${port}`)
    })
} catch(e) {}

Hooks.automatedBrowserCommands = {
  mounted() {
    this.handleEvent("open-browser", (message) => {
      window.userdocs.openBrowser()
    })
    this.handleEvent("close-browser", (message) => {
      window.userdocs.closeBrowser()
    })
  }
};

Hooks.automationManager = {
  mounted() {
    this.handleEvent("start-running", (message) => { window.userdocs.start(message) })
    this.handleEvent("execute", (message) => { window.userdocs.execute(message.step) })
    this.handleEvent("executeProcess", (message) => { window.userdocs.executeProcess(message.process) })
    this.handleEvent("executeJob", (message) => { window.userdocs.executeJob(message.job) })
    this.el.addEventListener("update-step", (message) => {
      this.pushEventTo("#automation-manager", "update-step", { step: message.detail })
    })
    this.el.addEventListener("update-process", (message) => {
      this.pushEventTo('#automation-manager', "update-process", { process: message.detail })
    })
  }
}
Hooks.test = {
  mounted() {
    this.handleEvent("test", (message) => {
    })
  }
}
*/

export {Hooks}