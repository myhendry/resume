import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Button } from "semantic-ui-react"
interface HeaderProps {
  siteTitle: string
}

export const Header: React.FC<HeaderProps> = ({
  siteTitle = "",
}: HeaderProps) => (
  <Head>
    <Title>
      <h1>{siteTitle}</h1>
    </Title>
    {/* <Nav>
      <NavLink to="/#anchor-intro" title="Intro">
        <Button primary>Introduction</Button>
      </NavLink>
      <NavLink to="/" title="Home">
        <Button primary>Home</Button>
      </NavLink>
      <NavLink to="/page-2" title="Static P2">
        <Button secondary>Static P2</Button>
      </NavLink>
      <NavLink to="/app/admin" title="Client">
        <Button secondary>Client</Button>
      </NavLink>
    </Nav> */}
  </Head>
)

const Head = styled.div`
  padding: 20px;
  display: flex;
`
const Title = styled.div`
  margin: 0 30px;
  color: #fff;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLink = styled(AnchorLink)`
  margin: 0 30px;
`
