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
        sidebar: [
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