export default {
  title: 'Rebase D. Ventures',
  description: 'Explore the Web 3.0 world\'s frontier and spread tech ideas by supporting outstanding developers, teams, and projects with the help of ventures derived from the Rebase community.',

  head: [
    // Favicon
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],

    // Fonts
    ['link', { rel: 'stylesheet', href: '/assets/fonts/alibaba-font.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/fonts/dinCondensedBold.css' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'Web3, blockchain, venture capital, cryptocurrency, DeFi, DAO, investment, technology, startup, Rebase' }],
    ['meta', { name: 'author', content: 'Rebase D. Ventures' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Open Graph Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Rebase D. Ventures - Web3 Venture Capital' }],
    ['meta', { property: 'og:description', content: 'Explore the Web 3.0 world\'s frontier and spread tech ideas by supporting outstanding developers, teams, and projects with the help of ventures derived from the Rebase community.' }],
    ['meta', { property: 'og:url', content: 'https://rebased.ventures' }],
    ['meta', { property: 'og:image', content: 'https://rebased.ventures/assets/images/LOGO.png' }],
    ['meta', { property: 'og:site_name', content: 'Rebase D. Ventures' }],

    // Twitter Card Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Rebase D. Ventures - Web3 Venture Capital' }],
    ['meta', { name: 'twitter:description', content: 'Explore the Web 3.0 world\'s frontier and spread tech ideas by supporting outstanding developers, teams, and projects.' }],
    ['meta', { name: 'twitter:image', content: 'https://rebased.ventures/assets/images/LOGO.png' }],

    // Additional Meta Tags
    ['meta', { name: 'theme-color', content: '#05d266' }],
    ['link', { rel: 'canonical', href: 'https://rebased.ventures' }],

    // Structured Data (JSON-LD)
    ['script', {
      type: 'application/ld+json'
    }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rebase D. Ventures",
      "url": "https://rebased.ventures",
      "logo": "https://rebased.ventures/assets/images/LOGO.png",
      "description": "Explore the Web 3.0 world's frontier and spread tech ideas by supporting outstanding developers, teams, and projects with the help of ventures derived from the Rebase community.",
      "foundingDate": "2021",
      "industry": "Venture Capital",
      "keywords": ["Web3", "blockchain", "venture capital", "cryptocurrency", "DeFi", "DAO"],
      "sameAs": [
        "https://twitter.com/RebaseCommunity"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "General Inquiry",
        "url": "https://tally.so/r/w5jj9E"
      }
    })]
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