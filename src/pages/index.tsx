import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Layout, SEO } from "../components/common"
import { Introduction } from "../modules/Introduction"
import { LottieControl } from "../modules/Lottie"
import { Divider } from "semantic-ui-react"

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

      <ImageBox>
        <Image fluid={data.file.childImageSharp.fluid} />
      </ImageBox>
      <Divider />
      <motion.h2 animate={{ fontSize: 50 }}>Welcome</motion.h2>
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

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default IndexPage
