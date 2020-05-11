import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./header"
import { Footer } from "./footer"
import "semantic-ui-less/semantic.less"
import { Container } from "semantic-ui-react"

export const Layout: React.FC = ({ children }) => {
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
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  )
}
