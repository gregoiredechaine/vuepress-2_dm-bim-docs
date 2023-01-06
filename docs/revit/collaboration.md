---
title: Collaboration
---
Collaboration is an integral part of the workflow in the AEC industry.

Revit designates collaborative models as Workshared models. DMA uses the ***Autodesk Construction Cloud*** platform exclusively for hosting our Revit models. That means that the vast majority of our models are `Cloud Workshared Models` with some exceptions.

We do not store any Central models on our server as the computer resources required are too grand and these models cannot be effectively shared with consultants outside the office's physical network.

- - -

## Worksets

Yes, it is a made up a word, but it's one that you will become very familiar with...

When a model is saved as a Central model, it becomes Workset enabled. The Autodesk documentation is very complete on working with Worksets:

[Autodesk Knowledge Network - Revit 2023 - Worksets](https://knowledge.autodesk.com/support/revit/learn-explore/caas/CloudHelp/cloudhelp/2023/ENU/Revit-Collaborate/files/GUID-FDAA51E3-7703-4965-B09E-E61A92CD0E5A-htm.html?v=2023&st=Worksets)

Worksets essentially work like this:

* When you work in a workshared project, you specify an active workset.
* Each new model element you add to the project is then contained in the active workset.
* View-specific elements, such as annotations and dimensions, are placed in the workset for the current view.
* You can edit individual elements, or you can edit entire worksets.
* When you check out an individual element or a whole workset, the elements are visible to other users but are not editable by them until you relinquish the element or workset. (This is the process that happens when you `Synchronize with Central`
* To check out an individual element, borrow it.
* To check out a workset, make it editable.

Note: To edit an element or a workset, it must be up-to-date. If you attempt to edit an element or a workset that is not up-to-date, you are prompted to update your local copy of the central model, so that you have all of the latest changes.

### Save a Workshared Cloud Model

Enabling Collaboration is easy and will happen automatically when you first save your Cloud Workshared Models to the ACC Document Management platform.

Follow these steps to Save a Workshared Cloud Model:

1. Save your model locally, as you will not be able to enable Model Collaboration without first saving it once.
2. Open the Collaborate Ribbon

![Select the Collaborate Ribbon](https://ucarecdn.com/4b898fc7-40a4-4f7d-852a-708f2a900f6e/ "Revit - Collaboration - Save Workshared Cloud Model - 1")

3. Select the Collaborate button.

![Select the Collaborate Button](https://ucarecdn.com/b6289d19-6520-4bb6-bd1c-b594b2a3b092/ "Revit - Collaboration - Save Workshared Cloud Model - 2")

1. You will be prompted to select an option for how you wish to enable model collaboration. You will select the `In the cloud` option. 

![Collaborate Menu, Select 'In the cloud'](https://ucarecdn.com/cdcd4a6b-7869-46c9-b4a5-678c81702ac9/ "Revit - Collaboration - Save Workshared Cloud Model - 3")

5. A menu popup will require you to select a project and a location to save the file on the ACC cloud. Work with your BIM Manager if you are unable to find the correct project directory or are unsure where to save / or what top name your model. (We will be adding documentastion in the future on this subject...)

![Save as Cloud Model Menu](https://ucarecdn.com/832c0dfe-eb23-4844-8906-72470849364d/ "Revit - Collaboration - Save Workshared Cloud Model - 4")

1. The next part is automatic, a few menus will go by... The model will have default worksets enabled and be saved to the cloud location with the filename specified.
2. Continue to the Creating Default Worksets section.

### Creating Default Worksets

Our team has created a Dynamo Player action for enabling DMA's default worksets in your new project. This one is simple as it is a (Press Play) script.

The initial project setup by Revit creates the following default worksets:

* `Shared Views, Levels, Grids`
* `Workset1`

![Default Worksets Menu](https://ucarecdn.com/b75c7874-8945-4b8e-9575-2b918d97442f/ "Revit - Collaboration - Creating Default Worksets - 1")

These will be modified by the script. It is best practice to run this script before adding any model elements to your Revit file.