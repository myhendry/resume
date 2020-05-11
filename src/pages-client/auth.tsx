import React from "react"
import { RouteComponentProps } from "@reach/router"

import { useHeyQuery } from "../__generated__/graphql"

interface Props extends RouteComponentProps {}

const Auth: React.FC<Props> = () => {
  const { loading, error, data } = useHeyQuery()

  console.log(data)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Failed to Load {error.message}</div>

  return (
    <div>
      <h1>Auth</h1>
      {data ? <p>{data.hey}</p> : null}
    </div>
  )
}

export default Auth
