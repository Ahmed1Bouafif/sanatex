const languages = require("./languages")
module.exports = {
  siteUrl: "https://sanatex.ch",
  title: "Sanatex",
  description: "Sanatex, your partner for planning, realisation and maintenance of wired telecommunication networks.",
  copyright: "This ebsite is copyright 2023 Sanatex",
  menu: [
    { label: "Startseite", slug: "/" },
    { label: "Über", slug: "/about/" },
    { label: "Dienstleistungen", slug: "/services/" },
    { label: "Offene Stellen", slug: "/contact/" },
    { label: "Kontakt", slug: "/contact/" },
  ],
  languages,
}
