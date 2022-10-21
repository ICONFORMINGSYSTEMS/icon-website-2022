import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Flex, Actions } from "./layoutComponents"
import { AnchorPrimary } from "./buttons"
import Symons from "../components/symons"

const device = {
  md: "48em",
}

const Container = styled.div`
  width: 91%;
  margin: 0 0 0 auto;

  @media screen and (max-width: ${device.md}) {
    width: 85%;
    margin: 0 auto;
    max-width: 65rem;
  }
`

const Hero = styled.div`
  padding: 82px 0;
`

const HeroWrapper = styled.div`
  display: flex;
  height: 100%;

  & > * {
    width: 100%;
  }
`
const TextWrapper = styled.div`
  align-self: center;

  @media screen and (max-width: ${device.md}) {
    padding-top: 6em;
  }
`

const HeroText = styled.div`
  color: var(--txt-dark);
`

const ImgWrapper = styled.div`
  @media screen and (max-width: ${device.md}) {
    display: none;
  }

  img {
    object-fit: cover;
    height: 600px;
    clip-path: var(--clip-left);
  }
`

export default function HeroBasic() {
  return (
    <Container>
      <Hero>
        <HeroWrapper>
          <Flex>
            <TextWrapper>
              <HeroText className="spacing">
                <h1 className="title">
                  We design, supply, and rent steel concrete forming and shoring
                  systems
                </h1>
                <p>
                  Combining the best products in the industry with our own
                  in-house design, manufacturing and project management to
                  ensure customer success.
                </p>
                <Actions>
                  <AnchorPrimary
                    target="_popup"
                    href="../../brochures/about-us.pdf"
                  >
                    learn more
                  </AnchorPrimary>
                </Actions>
                <Symons />
              </HeroText>
            </TextWrapper>
            <ImgWrapper>
              <StaticImage
                src="../images/hero.png"
                placeholder="blurred"
                alt="concrete forming ontario"
                layout="constrained"
              />
            </ImgWrapper>
          </Flex>
        </HeroWrapper>
      </Hero>
    </Container>
  )
}
