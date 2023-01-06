import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEnglish: NavbarConfig = [
    {
        text: 'Dynamo',
        children: [
            '/dynamo/README.md',
            '/dynamo/construction-assemblies-scripting.md',
        ],
    },
    {
        text: 'Revit',
        children: [
            '/revit/README.md',
            '/revit/collaboration.md',
            '/revit/revit_content.md',
            '/revit/revit_library.md',
            '/revit/revit_templates.md',
            '/revit/view_templates.md',
        ],
    },
]
