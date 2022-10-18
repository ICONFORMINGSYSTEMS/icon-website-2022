import React from "react"
import styled from "styled-components"

import { Container, Actions, ActionsStacked } from "../layoutComponents"
import { AnchorPrimary, ButtonSecondary } from "../buttons"

import Symons from "../symons"

const device = {
  md: "35em",
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: ${props => `url(${props.img})`}, var(--clr-overlay);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
`

const BannerText = styled.div`
  width: 100%;
  max-width: 90ch;

  h1,
  h2,
  h3 {
    line-height: 1.1;
  }
`

const Brochures = styled.div`
  display: flex;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
    align-items: flex-start;
  }

  & > * + * {
    margin-left: 0.6rem;
    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
    }
  }
  a {
    text-transform: capitalize;
    color: var(--txt-light);
    font-weight: var(--fw-500);
  }
`

export default function BannerActions(props) {
  return (
    <BannerWrapper img={props.img}>
      <Container className="spacing">
        <BannerText className="spacing">
          <h2 className="title">{props.heading}</h2>
          <p>{props.body}</p>
          <Symons />
          {/* <Actions>
            <ButtonSecondary to={props.toSecondary}>
              {props.buttonSecondary}
            </ButtonSecondary>
            <AnchorPrimary
              target="_popup"
              href="https://f8ddc227-e88d-4d6f-8db0-3e691da130d3.filesusr.com/ugd/a69f31_6e465568d22f44d0aba7ea3685cee831.pdf"
            >
              visit our brochure
            </AnchorPrimary>
          </Actions> */}
          <ActionsStacked>
            <ButtonSecondary to={props.toSecondary}>
              {props.buttonSecondary}
            </ButtonSecondary>
            <Brochures>
              <a
                target="_blank"
                href="../../../brochures/icon-steel-ply-br.pdf"
              >
                Steel ply brochure
              </a>
              <a target="_blank" href="../../../brochures/icon-maf-br.pdf">
                MAF brochure
              </a>
              <a target="_blank" href="../../../brochures/icon-ff-br.pdf">
                FF brochure
              </a>
              <a target="_blank" href="../../../brochures/icon-symply-br.pdf">
                SYM brochure
              </a>
              <a target="_blank" href="../../../brochures/s-backbone-ag.pdf">
                Backbone brochure
              </a>
              <a
                target="_blank"
                href="../../../brochures/s-soldier-beam-br.pdf"
              >
                Soldier brochure
              </a>
            </Brochures>
          </ActionsStacked>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}
