import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaAngleDoubleDown } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

interface CoverProps {
  a?: string
}

export const Cover: React.FC<CoverProps> = () => {
  //! dynamically render browser height and width
  // const [height, setHeight] = useState(window.innerHeight)
  // const [width, setWidth] = useState(window.innerWidth)

  // const updateWidthAndHeight = () => {
  //   setWidth(window.innerWidth)
  //   setHeight(window.innerHeight)
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", updateWidthAndHeight)

  //   return () => window.removeEventListener("resize", updateWidthAndHeight)
  // }, [])

  return (
    <CoverBox>
      {/* <p style={{ color: "#fff", margin: "200px" }}>{arrowPoint}</p> */}
      <Logo2
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 5, loop: Infinity }}
      />
      <Logo
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <LogoText animate={{ fontSize: 35 }}>H</LogoText>
      </Logo>

      <IconBox
        whileHover={{ scale: 1.5 }}
        initial={{ y: 350 }}
        //        animate={{ y: "calc(100vh - 310px)" }}
        animate={{ y: 250 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <AnchorLink to="/#intro">
          <FaAngleDoubleDown style={{ color: "#fff" }} size={32} />
        </AnchorLink>
      </IconBox>
    </CoverBox>
  )
}

const CoverBox = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo2 = styled(motion.div)`
  background-color: burlywood;
  position: absolute;
  height: 110px;
  width: 110px;
  border-radius: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled(motion.div)`
  position: absolute;
  z-index: 10;
  background-color: gold;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoText = styled(motion.h2)`
  color: #000;
`

const IconBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`
