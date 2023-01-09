import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEnglish: NavbarConfig = [
    {
        text: 'Dynamo',
        children: [
            '/dynamo/README.md',
            '/dynamo/construction_assemblies.md',
        ],
    },
    {
        text: 'Revit',
        children: [
            '/revit/README.md',
            '/revit/collaboration.md',
            '/revit/revit_content.md',
            '/revit/revit_library.md',
            '/revit/revit_template.md',
            '/revit/view_templates.md',
        ],
    },
    {
        text: 'Revit Templates',
        children: [
            '/revit_templates/README.md',
            '/revit_templates/revit_template_-_base.md',
        ],
    },
]
