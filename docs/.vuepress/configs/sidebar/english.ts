import type { SidebarConfig } from "@vuepress/theme-default";

// English Sidebar
export const sidebarEnglish: SidebarConfig = {
    // SidebarObject for '/' - Home
    '/': [
        // SidebarItem
        {
            text: 'Home',
            link: '/',
        },
        // SidebarItem
        {
            text: 'Welcome',
            link: '/welcome.md',
            children: [], 
        },
        ],
    // SidebarObject for '/architecture/' - Architecture
    '/architecture/': [
        '/architecture/README.md',
        '/architecture/materials/README.md',
        ],
    // SidebarObject for '/dynamo/' - Dynamo
    '/dynamo/': [
         // String - Page File Path
        '/dynamo/README.md',
        '/dynamo/construction-assemblies-scripting.md',
        ],
    // SidebarObject for '/revit/' - Revit
    '/revit/': [
        // String - Page File Path
        '/revit/README.md',
        ],
}
