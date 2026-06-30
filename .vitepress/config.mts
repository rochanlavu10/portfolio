import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Portfolio',
  description: 'My portfolio',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/rochanlavu10'
      }
    ]
  }
})