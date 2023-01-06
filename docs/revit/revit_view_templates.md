---
title: View Templates
---
## Floor Plan

Floor Plans are the most critical view template. These views are created in the **Architectural** model and are the main views that will contain all of the information for walls, doors and windows that will be used in construction.

| Parameter            | Value                                |
| :------------------- | :----------------------------------- |
| View Template (Name) | DM View Template - Plan - Floor Plan |

### DMA Criteria

* Floor Plans must be at the `1/4" = 1'-0"` scale. When floor plans do not fit alone on one sheet - you will add Key Plans at the scale that corresponds to the correct sheet and break your plans into parts.
* Floor Plans will be one per sheet, grids get extended to the edge of the page.
* There is a vertical sheet layout, looks like this:
* There is also a horizontal sheet layout, looks like this:

### View Properties

| Parameter                      | Value                                | Include |
| :----------------------------- | :----------------------------------- | :------ |
| View Scale                     | 1/4" = 1'-0" - Refer to notes below. | \[x]    |
| Scale Value                    | 48                                   |         |
| Display Model                  | `Normal`                             | \[x]    |
| Detail Level                   | `Medium`                             | \[x]    |
| Parts Visibility               | `Show Original`                      | \[x]    |
| V/G Overrides Model            | Refer to notes below.                | \[x]    |
| V/G Overrides Annotation       | Refer to notes below.                | \[x]    |
| V/G Overrides Analytical Model | Refer to notes below.                | \[x]    |
| V/G Overrides Import           | Refer to notes below.                | \[x]    |
| V/G Overrides Filter           | Refer to notes below.                | \[x]    |
| V/G Overrides Worksets         | Refer to notes below.                | \[x]    |
| V/G Overrides RVT Links        | Refer to notes below.                | \[x]    |
| Model Display                  | Refer to notes below.                | \[x]    |
| Shadows                        | Refer to notes below.                | \[x]    |
| Sketchy Lines                  | Refer to notes below.                | \[x]    |
| Depth Cueing                   | Refer to notes below.                | \[x]    |
| Lighting                       | Refer to notes below.                | \[x]    |
| Photographic Exposure          | Refer to notes below.                | \[x]    |
| Background                     | Refer to notes below.                | \[x]    |
| Far Clipping                   | `Clip with line`                     | \[x]    |
| Phase Filter                   | `Show Complete`                      | \[x]    |
| Discipline                     | `Architectural`                      | \[x]    |
| Show Hidden Lines              | `By Discipline`                      | \[x]    |
| Colour Scheme Location         | `Background`                         | \[x]    |
| Colour Scheme                  | `<none>`                             | \[x]    |
| Project Rotation               |                                      | \[x]    |
| Subcategory                    |                                      | \[x]    |

### View Scale

`1/4" = 1'-0"`

* `Scale Value` is `1:48` (Closest metric equivalent is a 1:50 drawing).

### V/G Overrides Model

* Style is set to `Hidden Line`
* Do not use anti-alaising.
* Do not use silouettes.

### V/G Overrides Annotation

### V/G Overrides Analytical Model

### V/G Overrides Import

### V/G Overrides Filters

### V/G Overrides Worksets

### V/G Overrides RVT Links

### Model Display

### Shadows

* Do not use `Cast Shadows`
* Do not use `Show Ambient Shadows`

### Sketchy Lines

* Do not use `Enable Sketchy Lines`

### Lighting

### Photograhpic Exposure

### Background

---

## Floor Finish Plan

Floor Finish Plans are created in the **Interiors** model and are the main views that will contain all of the information for walls, doors and windows that will be used in construction.

| Parameter            | Value                                |
| :------------------- | :----------------------------------- |
| View Template (Name) | DM View Template - Plan - Floor Plan |

### DMA Criteria

* Floor Finish Plans should always fit on one sheet. Typically they would be at the `1/4" = 1'-0"` scale. When floor plans do not fit alone on one sheet - you will reduce plans to the scale that corresponds to the correct sheet. Make this change in your view template!
* Floor Finish Plans will be one per sheet.
* There is a vertical sheet layout, looks like this:
* There is also a horizontal sheet layout, looks like this:

### View Properties

| Parameter                      | Value                                | Include |
| :----------------------------- | :----------------------------------- | :------ |
| View Scale                     | 1/4" = 1'-0" - Refer to notes below. | \[x]    |
| Scale Value                    | 48                                   |         |
| Display Model                  | `Normal`                             | \[x]    |
| Detail Level                   | `Coarse`                             | \[x]    |
| Parts Visibility               | `Show Original`                      | \[x]    |
| V/G Overrides Model            | Refer to notes below.                | \[x]    |
| V/G Overrides Annotation       | Refer to notes below.                | \[x]    |
| V/G Overrides Analytical Model | Refer to notes below.                | \[x]    |
| V/G Overrides Import           | Refer to notes below.                | \[x]    |
| V/G Overrides Filter           | Refer to notes below.                | \[x]    |
| V/G Overrides Worksets         | Refer to notes below.                | \[x]    |
| V/G Overrides RVT Links        | Refer to notes below.                | \[x]    |
| Model Display                  | Refer to notes below.                | \[x]    |
| Shadows                        | Refer to notes below.                | \[x]    |
| Sketchy Lines                  | Refer to notes below.                | \[x]    |
| Depth Cueing                   | Refer to notes below.                | \[x]    |
| Lighting                       | Refer to notes below.                | \[x]    |
| Photographic Exposure          | Refer to notes below.                | \[x]    |
| Background                     | Refer to notes below.                | \[x]    |
| Far Clipping                   | `Clip with line`                     | \[x]    |
| Phase Filter                   | `Show Complete`                      | \[x]    |
| Discipline                     | `Architectural`                      | \[x]    |
| Show Hidden Lines              | `By Discipline`                      | \[x]    |
| Colour Scheme Location         | `Background`                         | \[x]    |
| Colour Scheme                  | `<none>`                             | \[x]    |
| Project Rotation               |                                      | \[x]    |
| Subcategory                    |                                      | \[x]    |

### View Scale

`1/4" = 1'-0"`

* `Scale Value` is `1:48` (Closest metric equivalent is a 1:50 drawing).

### V/G Overrides Model
- Overide Walls
  - Override `Cut - Lines` weight to `1`
  - Override `Cut - Patterns` foreground to `Solid Fill` in colour `Black`

* Style is set to `Hidden Line`
* Do not use anti-alaising.
* Do not use silouettes.

### V/G Overrides Annotation
- Hide Category for Grids

### V/G Overrides Analytical Model

### V/G Overrides Import

### V/G Overrides Filters

### V/G Overrides Worksets

### V/G Overrides RVT Links
- Revit Link for the Architectural model should be visible in this view.

### Model Display

### Shadows

* Do not use `Cast Shadows`
* Do not use `Show Ambient Shadows`

### Sketchy Lines

* Do not use `Enable Sketchy Lines`

### Lighting

### Photograhpic Exposure

### Background


---

## Reflected Ceiling Plan (RCP)

Reflected Ceiling Plans are another critical view template. These views are created in the **Architectural** model and are the main views that will contain all of the information for ceiling heights and the layout/placement of lighting fixtures on the ceiling.

| Parameter            | Value                                |
| :------------------- | :----------------------------------- |
| View Template (Name) | DM View Template - Plan - Reflected Ceiling Plan |

### DMA Criteria

* Refelected Ceiling Plans must be at the `1/4" = 1'-0"` scale. When floor plans do not fit alone on one sheet - you will add Key Plans at the scale that corresponds to the correct sheet and break your plans into parts.
* Floor Plans will be one per sheet, grids get extended to the edge of the page.
* There is a vertical sheet layout, looks like this:
* There is also a horizontal sheet layout, looks like this:

### View Properties

| Parameter                      | Value                                | Include |
| :----------------------------- | :----------------------------------- | :------ |
| View Scale                     | 1/4" = 1'-0" - Refer to notes below. | \[x]    |
| Scale Value                    | 48                                   |         |
| Display Model                  | `Normal`                             | \[x]    |
| Detail Level                   | `Medium`                             | \[x]    |
| Parts Visibility               | `Show Original`                      | \[x]    |
| V/G Overrides Model            | Refer to notes below.                | \[x]    |
| V/G Overrides Annotation       | Refer to notes below.                | \[x]    |
| V/G Overrides Analytical Model | Refer to notes below.                | \[x]    |
| V/G Overrides Import           | Refer to notes below.                | \[x]    |
| V/G Overrides Filter           | Refer to notes below.                | \[x]    |
| V/G Overrides Worksets         | Refer to notes below.                | \[x]    |
| V/G Overrides RVT Links        | Refer to notes below.                | \[x]    |
| Model Display                  | Refer to notes below.                | \[x]    |
| Shadows                        | Refer to notes below.                | \[x]    |
| Sketchy Lines                  | Refer to notes below.                | \[x]    |
| Depth Cueing                   | Refer to notes below.                | \[x]    |
| Lighting                       | Refer to notes below.                | \[x]    |
| Photographic Exposure          | Refer to notes below.                | \[x]    |
| Background                     | Refer to notes below.                | \[x]    |
| Far Clipping                   | `Clip with line`                     | \[x]    |
| Phase Filter                   | `Show Complete`                      | \[x]    |
| Discipline                     | `Architectural`                      | \[x]    |
| Show Hidden Lines              | `By Discipline`                      | \[x]    |
| Colour Scheme Location         | `Background`                         | \[x]    |
| Colour Scheme                  | `<none>`                             | \[x]    |
| Project Rotation               |                                      | \[x]    |
| Subcategory                    |                                      | \[x]    |

### View Scale

`1/4" = 1'-0"`

* `Scale Value` is `1:48` (Closest metric equivalent is a 1:50 drawing).

### V/G Overrides Model

* Style is set to `Hidden Line`
* Do not use anti-alaising.
* Do not use silouettes.

### V/G Overrides Annotation

### V/G Overrides Analytical Model

### V/G Overrides Import

### V/G Overrides Filters

### V/G Overrides Worksets

### V/G Overrides RVT Links

### Model Display

### Shadows

* Do not use `Cast Shadows`
* Do not use `Show Ambient Shadows`

### Sketchy Lines

* Do not use `Enable Sketchy Lines`

### Lighting

### Photograhpic Exposure

### Background
