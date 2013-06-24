Workflow Permissions
====================
By default Alfresco cannot manage users or groups to start the advanced workflow. 
Workflow permissions provide the way to manage permission of advanced workflow by configuration in share-config-custom.xml

Sample
======

```xml
<alfresco-config>
   <config evaluator="string-compare" condition="Workflow" replace="true">
       <!-- add default for allow all undefine permission workflows -->
        <permission-workflows default="allow">
            <permission-workflow name="activiti$activitiAdhoc">
                <authorities>
                    <authority type="user">mjackson</authority>
                    <authority type="group">GROUP_hello_morning</authority>
                </authorities>
            </permission-workflow>
        </permission-workflows>
    </config>
</alfresco-config>
```
Building
=====

```bash
mvn package
```
After building you can find AMP package in grant-permissions-repo and grant-permissions-share. Install it by Alfresco Module Management Tools (MMT)
