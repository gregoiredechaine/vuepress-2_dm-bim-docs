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
            '/dynamo/': [
                // String - Page File Path
                '/dynamo/README.md',
                '/dynamo/construction-assemblies-scripting.md',
            ],
        },
        navbar: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Dynamo',
                link: 'dynamo/',
            }
        ]
    })
})