import React from "react"
import { Router as MyRouter } from "@reach/router"

import { Layout } from "../components/common"
import Profile from "../pages-client/profile"
import Admin from "../pages-client/admin"
import Auth from "../pages-client/auth"

const App = () => {
  return (
    <Layout>
      <MyRouter basepath="/app">
        <Profile path="/profile" />
        <Admin path="/admin" />
        <Auth path="/" />
      </MyRouter>
    </Layout>
  )
}

export default App
