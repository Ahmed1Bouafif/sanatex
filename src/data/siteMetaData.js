const languages = require('./languages');
module.exports = {
  siteUrl: 'https://sanatex.ch',
  title: 'Sanatex',
  description:
    'Sanatex GmbH – die neuste Generation von schneller und intelligenter Technologie. Wir bringen Sie auf das höchste Level.',
  copyright: 'This ebsite is copyright 2023 Sanatex',
  menu: [
    { label: 'Startseite', slug: '/' },
    { label: 'Über uns', slug: '/about/' },
    { label: 'Dienstleistungen', slug: '/services/' },
    { label: 'Offene Stellen', slug: '/contact/' },
    { label: 'Kontakt', slug: '/contact/' },
  ],
  image: '/logo-small.png',
  languages,
};
