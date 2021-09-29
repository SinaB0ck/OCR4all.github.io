module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'de-DE',
      title: 'OCR4all',
      description: 'OCR4all Dokumentation',
    },
    '/en/': {
      lang: 'en-US',
      title: 'OCR4all',
      description: 'OCR4all documentation',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'Deutsch',
        navbar: [
      { text: 'Über OCR4all', link: '/about.md/' },
      { text: 'Software und Download', link: '/software_download/software_download.md/' },
      { text: 'Aktivitäten', link: '/activities.md/' },
      { text: 'Team', link: '/team.md/' },
      { text: 'Libraries', link: '/libraries.md/'},
    ],
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
      { text: 'About', link: '/about.md/'},
      { text: 'Software and Download', link: '/software_download/software_download.md/' },
      { text: 'Activities', link: '/activities.md/' },
      { text: 'Team', link: '/team.md/' },
      { text: 'Libraries', link: '/libraries.md/'},
    ],
      },
    },
    logo: 'http://ocr4all.org/images/logo.jpg',
  },
}
