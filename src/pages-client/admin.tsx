import React from "react"
import { RouteComponentProps } from "@reach/router"

import { useHelloQuery } from "../__generated__/graphql"

interface Props extends RouteComponentProps {}

const Admin: React.FC<Props> = () => {
  const { loading, error, data } = useHelloQuery()

  console.log(data)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <h3>Admin</h3>
    </div>
  )
}

export default Admin
