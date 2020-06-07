import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "semantic-ui-less/semantic.less"
import { Container } from "semantic-ui-react"
import { createGlobalStyle } from "styled-components"

import { Header } from "./header"
import { Footer } from "./footer"

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #333;
    --light: #fff;
    --ultra: #f8f8f8;
    --bilboard: #330000;
    --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
body {
  background-color: #000;
  color: #03256C;
  font-family: Roboto Slab;
  box-sizing: border-box;
  line-height: 1.7;
  padding: 2rem;
}
`

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
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  )
}
