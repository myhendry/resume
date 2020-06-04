const path = require("path")

module.exports = {
  siteMetadata: {
    title: `HL`,
    description: `Gatsby + Typescript + Semantic-UI-React + Apollo Graphql Starter`,
    author: `@hl`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-less`,
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bubbles.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
