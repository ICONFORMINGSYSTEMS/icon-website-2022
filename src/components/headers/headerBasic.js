import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../layoutComponents"

const device = {
  md: "48em",
}

const Header = styled.header`
  background: var(--clr-light);
  box-shadow: var(--shadow-bottom);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: top 0.5s ease-out;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`

const LogoContainer = styled.div``

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 2em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    position: absolute;

    /* enable 88px if using Logo */
    /* top: 88px; */

    /* enable 82px if using LogoFull */
    top: 82px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    padding: 1em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-dark);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false)

  function toggleMenu() {
    navOpen(!nav)
  }

  return (
    <div>
      <Header id="header">
        <Container>
          <HeaderWrapper>
            <LogoContainer>
              <Link to="/">
                <StaticImage
                  src={"../../images/logo-full.svg"}
                  alt="Icon Forming Systems Inc."
                  placeholder="blurred"
                  height={50}
                  layout="fixed"
                />
              </Link>
            </LogoContainer>
            <Nav>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                <li>
                  <StyledLink to="#about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="#services">services</StyledLink>
                </li>
                <li>
                  <StyledLink to="#projects">projects</StyledLink>
                </li>
                <li>
                  <StyledLink to="#contact">contact</StyledLink>
                </li>
              </NavList>
            </Nav>
          </HeaderWrapper>
        </Container>
      </Header>
    </div>
  )
}
