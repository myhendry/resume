import React from "react"
import styled from "styled-components"

export const Footer = () => (
  <Foot>
    © {new Date().getFullYear()} <a href="https://github.com/myhendry">HL</a>
  </Foot>
)

const Foot = styled.div`
  text-align: center;
`
