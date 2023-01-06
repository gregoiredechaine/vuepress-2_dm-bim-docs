import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEnglish: NavbarConfig = [
    {
        text: 'Revit',
        children: [
            '/revit/README.md',
            '/revit/revit_content.md',
            '/revit/revit_library.md',
            '/revit/revit_templates.md',
            '/revit/revit_view_templates.md',
        ],
    },
    {
        text: 'Dynamo',
        children: [
            '/dynamo/README.md',
            '/dynamo/construction-assemblies-scripting.md',
        ],
    },
]
