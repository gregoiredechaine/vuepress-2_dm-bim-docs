import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Hello Vuepress 2',
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
                text: 'Vuepress 2 - Netlify CMS',
                link: '/'
            },
            {
                text: 'Admin',
                link: 'admin/#/',
            }
        ]
    })
})