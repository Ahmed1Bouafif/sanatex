const languages = require('./languages');
module.exports = {
  siteUrl: 'https://sanatex.ch',
  title: 'Sanatex',
  description:
    'Sanatex, your partner for planning, realisation and maintenance of wired telecommunication networks.',
  copyright: 'This ebsite is copyright 2023 Sanatex',
  menu: [
    { label: 'home', slug: '/' },
    { label: 'about', slug: '/about/' },
    { label: 'services', slug: '/services/' },
    { label: 'contact', slug: '/contact/' },
  ],
  languages,
};
