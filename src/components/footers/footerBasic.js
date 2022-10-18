import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container, Flex } from "../layoutComponents"

import { FaLinkedin } from "react-icons/fa"

import LogoFull from "../../images/logo-full.svg"

const device = {
  sm: "28em",
}

const FooterWrapper = styled.footer`
  padding: 7em 0;
  background: var(--clr-dark);
  color: var(--txt-light);

  @media screen and (max-width: 450px) {
    padding: 4em 0;
  }
`

const LogoContainer = styled.div`
  display: grid;
  place-items: center;

  img {
    width: 40%;
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 0.6rem;
  }

  a {
    color: var(--txt-light);
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Copyright = styled.div`
  font-size: 12px;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.sm}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 2em;

      @media screen and (max-width: ${device.sm}) {
        margin-left: 0;
      }
    }

    li {
      a {
        /* text-transform: capitalize; */
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-500);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light-secondary);

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <LogoContainer>
        <img src={LogoFull} alt="Icon Forming Systems" />
      </LogoContainer>
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <Socials>
            <p className="body italics">Follow us:</p>
            <div>
              <a
                target="_popup"
                href="https://www.linkedin.com/company/icon-forming-systems-inc/?originalSubdomain=ca"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </Socials>
          <Flex>
            <FlexItem className="spacing">
              <h2 className="heading">support</h2>
              <ul>
                <li className="italics">Corporate Office:</li>
                <li>38 Simpson Rd</li>
                <li>Bolton, ON</li>
                <li>L7E 1Y4</li>
                <li>Canada</li>
              </ul>
              <ul>
                <li className="italics">Yard Office:</li>
                <li>6650 Pacific Circle</li>
                <li>Mississauga, ON</li>
                <li>L5T 1V6</li>
                <li>Canada</li>
              </ul>
              <ul>
                <li>
                  <a href="mailto: info@iconformingsystems.com">{Info.mail1}</a>
                </li>
                <li>
                  <a href="tel: 905-857-2574">{Info.tel1}</a>
                </li>
              </ul>
            </FlexItem>
            <FlexItem>
              <h2 className="heading">quick links</h2>
              <ul>
                <li>
                  <StyledLink to="/">home</StyledLink>
                </li>
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
              </ul>
            </FlexItem>
            <FlexItem>
              <h2 className="heading">resources</h2>
              <ul>
                <li>
                  <a href="../../../brochures/about-us.pdf" target="_popup">
                    About ICON Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="../../../brochures/full-brochure.pdf"
                    target="_popup"
                  >
                    Full Product Brochure
                  </a>
                </li>

                <li>
                  <a
                    href="../../../brochures/icon-steel-ply-br.pdf"
                    target="_popup"
                  >
                    Steel Ply Brochure
                  </a>
                </li>
                <li>
                  <a href="../../../brochures/icon-maf-br.pdf" target="_popup">
                    MAF Brochure
                  </a>
                </li>
                <li>
                  <a href="../../../brochures/icon-ff-br.pdf" target="_popup">
                    FF Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="../../../brochures/icon-symply-br.pdf"
                    target="_popup"
                  >
                    SYM Brochure
                  </a>
                </li>
              </ul>
            </FlexItem>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2022</li>
              <li>{Info.name}</li>
              <li>All Rights Reserved</li>
            </ul>
            <ul>
              {/* <li>
                <a href="">Terms of use</a>
              </li> */}
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <a target="_blank" href="../../../brochures/terms.pdf">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Copyright>
          <hr />
        </Container>
        <Author className="center">
          <p>
            website by:{" "}
            <a target="_popup" href="https://www.aarontonner.com">
              www.aarontonner.com
            </a>
          </p>
        </Author>
      </FooterWrapper>
    </div>
  )
}
