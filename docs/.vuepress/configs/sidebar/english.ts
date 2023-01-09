import type { SidebarConfig } from "@vuepress/theme-default";

// English Sidebar
export const sidebarEnglish: SidebarConfig = {
    // SidebarObject for '/architecture/' - Architecture
    '/architecture/': [
        '/architecture/README.md',
        '/architecture/materials/README.md',
        ],
    // SidebarObject for '/dynamo/' - Dynamo
    '/dynamo/': [
         // String - Page File Path
        '/dynamo/README.md',
        '/dynamo/construction_assemblies.md',
        ],
    // SidebarObject for '/revit/' - Revit
    '/revit/': [
        {
            // String - Page File Path
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
    ],
    // SidebarObject for '/revit_templates/' - Revit Templates
    '/revit_templates/': [
        {
            // String - Page File Path
            text: 'Revit Templates',
            children: [
                '/revit_templates/README.md',
                '/revit_templates/system-families',
                '/revit_templates/revit-template---base.md',
            ],
        },
    ],
}
