import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Layout, SEO } from "../components/common"
import { Introduction } from "../modules/Introduction"
import { LottieControl } from "../modules/Lottie"
import { Divider, Menu } from "semantic-ui-react"

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

  const [activeItem, setActiveItem] = useState("home")

  const handleMenuCliick = () => {
    console.log("test")
  }

  return (
    <Layout>
      <SEO title="Home" />

      <ImageBox>
        <Image fluid={data.file.childImageSharp.fluid} />
      </ImageBox>
      <Divider />
      <Menu secondary>
        <Menu.Item
          as={AnchorLink}
          to="/#anchor-intro"
          name="home"
          active={activeItem === "home"}
          onClick={handleMenuCliick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleMenuCliick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleMenuCliick}
        />
      </Menu>

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

const InternalMenu = styled(Menu)`
  align-self: center;
`

export default IndexPage
