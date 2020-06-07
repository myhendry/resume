import React from "react"
import styled from "styled-components"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { FaAngleDoubleDown } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

interface CoverProps {
  a?: string
}

const block1Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
}

const block2Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 2,
  },
  hover: {
    scale: 1.5,
    transition: {
      yoyo: 10,
    },
  },
}

const logo2Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.75,
    transition: {
      duration: 5,
      loop: Infinity,
    },
  },
}

const logoVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      yoyo: Infinity,
    },
  },
}

const iconBoxVariants = {
  hidden: {
    y: 350,
  },
  visible: {
    y: 250,

    //        animate={{ y: "calc(100vh - 310px)" }}
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
}

// const iconBoxChildVariants = {
//   hidden: {
//     x: -350,
//     y: 0,
//   },
//   visible: {
//     x: 50,
//     y: 0,
//   },
// }

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
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])
  return (
    <CoverBox>
      {/* <p style={{ color: "#fff", margin: "200px" }}>{arrowPoint}</p> */}
      {/* <Block1 variants={block1Variants} initial="hidden" animate="visible">
        <Block2 variants={block2Variants} whileHover="hover" />
      </Block1> */}

      <Logo2 variants={logo2Variants} initial="hidden" animate="visible" />
      <Logo
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <LogoText animate={{ fontSize: 35 }}>H</LogoText>
      </Logo>
      <FanBlade
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 0.75 }}
        transition={{ delay: 2, loop: Infinity }}
      />

      <IconBox
        whileHover={{ scale: 1.5 }}
        variants={iconBoxVariants}
        initial="hidden"
        animate="visible"
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
  background-color: gold;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`
const Block1 = styled(motion.div)`
  position: absolute;
  background-color: white;
  height: 80px;
  width: 80px;
  display: flex;
  margin-left: 130px;
  /* align-items: center;
  justify-content: center; */
`
const Block2 = styled(motion.div)`
  position: absolute;
  background-color: red;
  height: 80px;
  width: 80px;
  display: flex;
  margin-left: 130px;
  /* align-items: center;
  justify-content: center; */
`

const LogoText = styled(motion.h2)`
  color: #000;
  position: absolute;
`

const IconBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`
// const LeftText = styled(motion.h1)`
//   color: #fff;
//   position: absolute;
//   font-size: 50;
//   right: 250px;
// `

const FanBlade = styled(motion.div)`
  width: 50%;
  position: absolute;
  border-bottom: 1px solid grey;
  z-index: -20;
`
