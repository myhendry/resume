import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from "gatsby"
import { Layout, SEO } from "../components/common"
import { Introduction } from "../modules/Introduction"
import { LottieControl } from "../modules/Lottie"
import { Button } from "semantic-ui-react"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "bubbles.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <AnchorLink to="/#anchor-intro" title="Intro">
          <Button primary>Introduction</Button>
        </AnchorLink>
        <AnchorLink to="/page-2" title="Page-2">
          <Button secondary>Page-2</Button>
        </AnchorLink>
      </div>

      <LottieControl />
      <Introduction />
      <Introduction />
      <Introduction />
    </Layout>
  )
}

export default IndexPage
