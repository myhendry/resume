import React from "react"
import { RouteComponentProps } from "@reach/router"

import { motion } from "framer-motion"
import { useHelloQuery } from "../__generated__/graphql"

type Props = RouteComponentProps

const Admin: React.FC<Props> = () => {
  const { loading, error, data } = useHelloQuery()

  console.log(data)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <motion.h2 animate={{ fontSize: 50 }}>Welcome</motion.h2>
    </div>
  )
}

export default Admin
