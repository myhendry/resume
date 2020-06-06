import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { Layout } from "../components/common"
import { useStaticQuery, graphql } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    query SelfQuery {
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
      <Wrapper>
        <Box1>
          <ImageBox>
            <Image fluid={data.file.childImageSharp.fluid} />
          </ImageBox>
        </Box1>
        <Box2>
          <motion.h2 style={{ color: "black" }} animate={{ fontSize: 50 }}>
            Imagine
          </motion.h2>
        </Box2>
        <Box3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          ducimus enim, labore illo hic explicabo nisi, eos omnis provident
          inventore placeat soluta. Blanditiis ab modi quisquam, nemo omnis
          porro asperiores.
        </Box3>
        <Box4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          optio ratione recusandae vero sint illum maxime officia amet cumque!
        </Box4>
        <Box6>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          optio ratione recusandae vero sint illum maxime officia amet cumque!
        </Box6>
        <Box7>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          ducimus enim, labore illo hic explicabo nisi, eos omnis provident
          inventore placeat soluta. Blanditiis ab modi quisquam, nemo omnis
          porro asperiores.
        </Box7>
        <Box8>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          optio ratione recusandae vero sint illum maxime officia amet cumque!
        </Box8>
        <Box9>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          optio ratione recusandae vero sint illum maxime officia amet cumque!
        </Box9>
        <Box10>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          ducimus enim, labore illo hic explicabo nisi, eos omnis provident
          inventore placeat soluta. Blanditiis ab modi quisquam, nemo omnis
          porro asperiores.
        </Box10>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* grid-column-gap: 1em;
  grid-row-gap: 1em; */
  grid-gap: 0.5em;
  margin: 1rem;
  grid-auto-rows: minmax(150px, auto);
  /* justify-items: stretch;
  align-items: stretch; */
`

const Box1 = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Box2 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  grid-column: 2/4;
`

const Box3 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  grid-column: 1/3;
`

const Box4 = styled.div`
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  grid-column: 3;
  /* grid-row: 1/2; */
`

const Box5 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Box6 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Box7 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Box8 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Box9 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Box10 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled(Img)`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  margin: 20px;
`

export default Home
