import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

interface SkillsProps {
  a?: string
}

export const Skills: React.FC<SkillsProps> = () => {
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
    <Wrapper>
      <ul>
        <Box1>
          <ImageBox>
            <Image fluid={data.file.childImageSharp.fluid} />
          </ImageBox>
        </Box1>
        <Box7 id="intro">
          <motion.h2 style={{ color: "black" }} animate={{ fontSize: 38 }}>
            Career
          </motion.h2>
        </Box7>
        <Box3>Graduated National University Singapore Business Finance</Box3>
        <Box4>Account Manager Mediatech Marketing Pte Ltd</Box4>
        <Box5>Account Manager Elpida Memory Pte Ltd</Box5>
        <Box6>Associate Director Propnex Realty Pte Ltd</Box6>
        <Box7>
          <motion.h2 style={{ color: "black" }} animate={{ fontSize: 38 }}>
            Skills
          </motion.h2>
        </Box7>
        <Box8>ReactJS</Box8>
        <Box10>Gatsby JS</Box10>
        <Box9>Express & Node</Box9>
        <Box4>GraphQL</Box4>
        <Box10>MongoDB</Box10>
        <Box11>PostgreSQL</Box11>
        <Box12>Typescript</Box12>
        <Box13>Rust (In Progress)</Box13>
        <Box4>Sales</Box4>
        <Box14>Facebook Marketing</Box14>
        <Box7>
          <motion.h2 style={{ color: "black" }} animate={{ fontSize: 38 }}>
            Portfolio
          </motion.h2>
        </Box7>
        <Box15>
          <a
            href="https://www.corporatespace.biz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Corporate Space
          </a>
        </Box15>
        <Box16>
          <a
            href="https://hendry-gql-server.herokuapp.com/graphql"
            target="_blank"
            rel="noopener noreferrer"
          >
            GQL Server
          </a>
        </Box16>
        <Box9>
          <a
            href="https://www.facebook.com/groups/856370754717615"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook ML5 & Tensorflow JS
          </a>
        </Box9>
        <Box5>4Jobs (Discontinued)</Box5>

        <Box2>
          <a
            href="https://stackoverflow.com/users/7285771/hendry-lim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
          </a>
        </Box2>
        <Box3>
          <a
            href="https://github.com/myhendry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Box3>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 10;
  margin: 1rem;
  > ul {
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* grid-column-gap: 1em;
  grid-row-gap: 1em; */
    grid-gap: 0.5em;
  }

  @media screen and (max-width: 700px) {
    > ul {
      grid-template-columns: 1fr;
    }
  }
`

const Box1 = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box2 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* grid-column: ; */
`

const Box3 = styled.div`
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  /* grid-column: 1/3; */
`

const Box4 = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* grid-column: 3; */
  /* grid-row: 1/2; */
`

const Box5 = styled.div`
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box6 = styled.div`
  background-color: lime;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box7 = styled.div`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box8 = styled.div`
  background-color: limegreen;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box9 = styled.div`
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box10 = styled.div`
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Box11 = styled.div`
  background-color: #c7d66d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Box12 = styled.div`
  background-color: #5299d3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Box13 = styled.div`
  background-color: #beb8eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Box14 = styled.div`
  background-color: #94c5dd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Box15 = styled.div`
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Box16 = styled.div`
  background-color: #53ff45;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled(Img)`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  margin: 5px;
`

const Divider = styled.div`
  width: 80%;
  border-bottom: 1px solid grey;
`
