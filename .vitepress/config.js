export default {
  title: 'Rebase D. Ventures',
  description: 'Explore the Web 3.0 world\'s frontier and spread tech ideas by supporting outstanding developers, teams, and projects with the help of ventures derived from the Rebase community.',

  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'stylesheet', href: '/assets/fonts/alibaba-font.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/fonts/dinCondensedBold.css' }]
  ],

  themeConfig: {
    siteTitle: false, // Hide default title to use custom logo

    nav: [
      { text: 'Home', link: '#home' },
      { text: 'Philosophy', link: '#Investment' },
      { text: 'Members', link: '#Members' },
      { text: 'Portfolios', link: '#Projects' },
      { text: 'Contact', link: '#Contact' }
    ],

    socialLinks: []
  },

  // Disable default theme to use custom theme
  appearance: false,

  // Build configuration
  base: '/',

  // Markdown configuration
  markdown: {
    html: true
  },

  // Vite configuration
  vite: {
    define: {
      __VUE_PROD_DEVTOOLS__: false
    }
  }
}