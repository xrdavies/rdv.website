import { createI18n } from 'vue-i18n'

// Import translation data
const messages = {
  en: {
    nav: {
      Home: 'Home',
      Investment: 'Philosophy',
      Members: 'Members',
      Projects: 'Portfolios',
      Contact: 'Contact'
    },
    banner: {
      title: 'What is <br>Rebase D. Ventures?',
      description: 'Explore the Web 3.0 world\'s frontier and spread tech ideas by supporting outstanding developers, teams, and projects with the help of ventures derived from the Rebase community.',
      driven: 'Community Driven',
      community: 'Run as DAO',
      ocommunity: 'Developer Partners',
      public: 'Public Ventures'
    },
    philosophy: {
      title: 'Our Philosophy'
    },
    members: {
      title: 'OUR <span>MEMBERS</span>'
    },
    projects: {
      title: 'PORTFOLIO'
    },
    footer: {
      contact: 'Contact Us',
      email: 'contact@rebased.ventures'
    }
  }
}

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false // Use Composition API mode
})

export default i18n