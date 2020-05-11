import React from "react"
import { RouteComponentProps } from "@reach/router"

interface Props extends RouteComponentProps {}

const Profile: React.FC<Props> = () => {
  return (
    <div>
      <h3>Profile</h3>
    </div>
  )
}

export default Profile
