import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "semantic-ui-react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Layout, SEO } from "../components/common"
import { Introduction } from "../modules/Introduction"
import { LottieControl } from "../modules/Lottie"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "self.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <AnchorLink to="/#anchor-intro" title="Intro">
          <Button primary>Introduction</Button>
        </AnchorLink>
        <AnchorLink to="/page-2" title="Static P2">
          <Button secondary>Static P2</Button>
        </AnchorLink>
        <AnchorLink to="/app/admin" title="Client">
          <Button secondary>Client</Button>
        </AnchorLink>
      </div>

      <Image fluid={data.file.childImageSharp.fluid} />
      <LottieControl />
      <Introduction />
      <Introduction />
      <Introduction />
    </Layout>
  )
}

const Image = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin: 20px;
`

export default IndexPage
