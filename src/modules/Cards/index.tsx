import React from "react"
import styled from "styled-components"

export const Cards = () => {
  return (
    <Card>
      <h1> Cards </h1>
    </Card>
  )
}

const Card = styled.div`
  background-color: red;
  height: 250px;
  width: 350px;
  border-radius: 15px;
  padding: 20px;
`
