import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/guideFarm/',
  title: "Guide NPF -  Docs",
  description: "The most accurate NPF guide Documentation",
  head: [
    ['link', { rel: 'icon', href: '/guideFarm/assets/ressourceBooster.png' }]
  ],
  appearance: 'force-dark',
  cleanUrls: true,
 
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Welcome', link: '/welcome' },
          {
            text : 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/get-started/why.md' },
              { text: 'Mission Conditions', link: '/get-started/missionConditions.md' }
            ]
          },
          {
            text : 'Builds',
            collapsed: false,
            items: [
              { text: 'Companion', link: '/builds/companion.md' },
              { text : 'Khora OS', link : '/builds/khoraOrigin.md'},
              { text : 'Khora SP', link : '/builds/khoraSteelPath.md' },
              { text : 'Nova OS/SP', link : '/builds/novaosSp.md' },
              { text : 'Nekros OS/SP', link : '/builds/nekrososSp.md' },
              { text : 'Weapons', link : '/builds/weapons.md' },
              { text : 'Operator', link : '/builds/operator.md' }
            ]
          },
          {
            text : 'Farming Methods',  
            collapsed: false,
            items: [
              { text: 'Nano Spore', link: '/farming/nanoSpore.md' },
              { text: 'Polymer Bundle', link: '/farming/polymerBundle.md' },
              { text: 'Ferrite', link: '/farming/ferrite.md'},
            ]
          },
          {
            text : 'Credits and Logs',
            collapsed: false,
            items: [
              { text: 'Credits', link: '/credits.md' },
              { text: 'Changelog', link: '/log.md' }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KCAmine/guideFarm.git' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 <a href="https://github.com/KCAmine"> -Amine </a>',
    },

    search: {
      provider: 'local'
    }

  }
})

