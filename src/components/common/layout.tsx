import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "semantic-ui-less/semantic.less"
import { Container } from "semantic-ui-react"

import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  )
}
