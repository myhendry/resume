const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Starter`,
    description: `Gatsby + Typescript + Semantic-UI-React + Apollo Graphql Starter`,
    author: `@hl`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
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
  ],
}
