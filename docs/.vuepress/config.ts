import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'en-US',
    title: 'DM-BIM - Docs',
    description: 'DM',
    plugins: [
        searchPlugin({
          // options
        }),
      ],
    theme: defaultTheme({
        docsDir: 'docs',
        repo: 'gregoiredechaine/vuepress-2_dm-bim-docs',
        sidebar: {
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
        },
        navbar: [
            {
                text: 'Revit',
                children: [
                    '/revit/README.md',
                    '/revit/content/README.md',
                    '/revit/library/README.md',
                ],
            },
            {
                text: 'Dynamo',
                children: [
                    '/dynamo/README.md',
                    '/dynamo/construction-assemblies-scripting.md',
                ],
            }
        ]
    })
})