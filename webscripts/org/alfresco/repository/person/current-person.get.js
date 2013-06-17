
function main()
{
   // Do we want to return containing groups?
   var groups = (args["groups"] == "true");
   model.person = person;
   model.capabilities = people.getCapabilities(person);
   model.groups = groups ? people.getContainerGroups(person) : null;
   model.immutability = groups ? people.getImmutableProperties(userName) : null;
}

main();