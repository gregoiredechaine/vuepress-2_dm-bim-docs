import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'DM-BIM - Docs',
    description: 'DM',
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
                text: 'Admin',
                link: 'admin/#/',
            }
        ]
    })
})