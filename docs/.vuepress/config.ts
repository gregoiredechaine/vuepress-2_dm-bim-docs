import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import {
    sidebarEnglish,
} from './configs/index.js'

export default defineUserConfig({
    // Set site-level URL Base to default value.
    base: '/',

    // Extra tags in '<head>'
    // head, ***add this from head config when ready.

    // Site-level locales configuration.
    locales: {
        '/': {
            lang: 'en-US',
            title: 'DM-BIM - Docs',
            description: 'Davignon Martin - BIM Docs',
        },
        /*
        * '/fr/': {
        *   lang: 'fr-CA',
        *   title: 'DM-BIM - Documentation',
        *   description: 'Davignon Martin - Documentation pour BIM',
        *},
        */
    },

    // Bundlre via Environment Varaiable. Add this when ready...

    // Plugin Config & Setup
    plugins: [
        searchPlugin({
          // options
        }),
      ],

    // Theme Config & Setup for Default Theme
    theme: defaultTheme({
        repo: 'gregoiredechaine/vuepress-2_dm-bim-docs',
        docsDir: 'docs',

        // Theme-level locales configuration.
        locales: {
            /**
             * English Locale Config
             * 
             * As the defaul locale of @vuepress/theme-default is English,
             * we do not need to set all of the locale fields.
             */
            '/': {
                // Navbar
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
                ],
                // Sidebar
                sidebar: sidebarEnglish,
                // Page Meta
                editLinkText: 'Edit on GitHub'
            }
        },
    }),
})