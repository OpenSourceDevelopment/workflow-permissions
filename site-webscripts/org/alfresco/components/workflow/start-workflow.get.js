<import resource="classpath:alfresco/site-webscripts/org/alfresco/components/workflow/workflow.lib.js">
model.workflowDefinitions = getWorkflowDefinitionsOfCurrentUser();

function main()
{
   var startWorkflow = {
      id : "StartWorkflow",
      name : "Alfresco.component.StartWorkflow",
      options : {
         failureMessage : "message.failure",
         submitButtonMessageKey : "button.startWorkflow",
         defaultUrl : getSiteUrl("my-tasks"),
         selectedItems : (page.url.args.selectedItems != null) ? page.url.args.selectedItems: "",
         destination : (page.url.args.destination != null) ? page.url.args.destination : "",
         workflowDefinitions : model.workflowDefinitions
      }
   };
   model.widgets = [startWorkflow];
}

main();
