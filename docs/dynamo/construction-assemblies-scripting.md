# Construction Assemblies

Revit has various *Construction Assemblies*, which are most commonly modelled as system families. The Construction Assemblies that we currently schedule in a project are:
- Walls
- Floors
- Ceilings
- Roofs
- Roof Soffits (Subcategory of Roofs in Revit)

## Revit Scheduling
The  Revit Schedules are all formatted the same.

Notes:
1. Where the Assembly Schedule does not have a 'Function' the schedule is has the column for Assembly Layers increased by 3/4".
2. There are short names for the paramaters. (Add table of the parameter names here after...)
3. The Assembly Layers are padded at the beginning with 10 spaces and a > `>        ` to help schedule readability.
4. Likewise, the title for ULC Reference # is also padded with 10 spaces to help legibility.
### Walls
Partition Walls vs Interior Walls. In Revit, the *Function* parameter of the wall is limited in selections. It is implied that walls that are of the *Function* interior will always be:
- Partition Walls - Architectural wall types, these must contain a Core Construction which is set to the Structural Material of the wall. The parameter value for *Function* in these wall types will be substituted in the *Type Name* parameter value from `Interior` to `Partition` as will the type mark, which will be substituted from starting with an `I` to a `P`.
- Interior Walls - Interior Design wall types, these are aesthetic. The *Core Constrcution* of these wall types should be set to empty. These wall types will always start with the *Type Name* value as `Interior` and *Type Mark* parameter value starts with an `I`.

### Floors

### Ceilings
It is assumed that all ceilings on a project are indoors: this would be equivalent to their *Function* parameter being hard-coded to the value *Interior*. Ceilings outside are modelled and referred to as *Soffits*, see the [Roof Soffits](#roof-soffits) section for more info. Ceilings can host lighting families and all sorts of other model elements that are part of the interior of the project.

### Roofs

### Roof Soffits
It is assumed that all soffits on a project are outdoors: this would be equivalent to their *Function* parameter being hard-coded to the value *Exterior*. It is also implied that soffits need thier own special category of electrical equipment, lighting & even mechanical equipment as the specifications for items that are outside are functionally different and should be modelled as such.

## Dynamo Scripting for Assemblies
You have access to a total of 10 custom scripts for working with and scheduling assemblies in your Revit Project.

It is required that prior to running any of the scripts, you complete the following checklist (the data entered here is used to name and populate your schedule):
1. Ensure that your project has the proper Shared Parameters loaded and enabled!!! (We use Revit's Parameter Service for this...)
2. Enter the 'Function' parameter properly on any Walls & Floors you are going to be modifying!!!
3. Enter the 'Fire Rating (Hr)' parameter properly on any walls!!! Choices for this one are:
    - `*EMPTY-FRR*`
    - `*Not Rated*`
    - `0 Hr`
    - `0.25 Hr` (Equivalent to 15 Minutes)
    - `0.50 Hr` (Equivalent to 30 Minutes)
    - `0.75 Hr` (Equivalent to 45 Minutes)
    - `1 Hr`
    - `1.50 Hr` (Equivalent to 90 Minutes)
    - `2 Hr`
    - `3 Hr`
    - `4 Hr`
4. Enter the Materials correctly for your *Construction Assemblies* prior to running the scripts!!! (We have documentation for this...)
5. Set the image for the 'Construction' to our placeholder. (You can download a copy of the placeholder here... )
6. Enter the Discipline parameter to Architecture for all walls you want listed as Partitions instead of Interior