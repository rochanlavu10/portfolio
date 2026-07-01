import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Rochan\'s Porfolio',
  description: 'My portfolio',

    head: [
    [
      'script',
      {
        defer: '',
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token":"18d04d87d21b40e5ababbfd9d100ca4c"}'
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact Me', link: '/contact' }
    ],

    outline: false,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/rochanlavu10'
      }
    ]
  }
})