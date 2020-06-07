import React from "react"

import { Skills } from "../components/skills"
import { Layout } from "../components/common"
import { Cover } from "../components/cover"

const Home = () => {
  return (
    <Layout>
      <Cover />
      <Skills />
    </Layout>
  )
}

export default Home
