import React from "react"

interface Props {
  siteTitle: string
}

export const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <div>
    <h1>{siteTitle}</h1>
  </div>
)
