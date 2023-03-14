/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `locale`,
    //     path: `${__dirname}/locales`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`en`, `fr`, `de`, `it`],
    //     defaultLanguage: `en`,
    //     siteUrl: `https://example.com/`,
    //     // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
    //     trailingSlash: "always",
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/:lang?/blog/:uid",
    //         getLanguageFromPath: true,
    //         excludeLanguages: ["en"],
    //       },
    //       {
    //         matchPath: "/preview",
    //         languages: ["en"],
    //       },
    //     ],
    //   },
    // },
  ],
}
