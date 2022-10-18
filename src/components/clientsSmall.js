import React from "react"
import styled from "styled-components"

import { Section, Container } from "./layoutComponents"

import Bird from "../images/bird-logo.svg"
import CityToronto from "../images/cityoftoronto-logo.svg"
import Clearwater from "../images/clearwater-logo.svg"
import Dufferin from "../images/dufferin-logo.svg"
import Black from "../images/black-logo.svg"
import Hillcrest from "../images/hillcrest-logo.svg"
import Kiewit from "../images/kiewit-logo.svg"
import Soncin from "../images/soncin-logo.svg"
import TomJones from "../images/tomjones-logo.svg"
import Zenith from "../images/zenith-logo.svg"

const device = {
  sm: "19em",
  md: "41em",
}

const Wrapper = styled.div`
  padding: 7em 0;

  @media screen and (max-width: 450px) {
    padding: 4em 0;
  }
  background: var(--clr-light-secondary);
  img {
    width: 80px;
  }
`

export const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

export default function ClientsSmall() {
  return (
    <Wrapper>
      {/* <Section> */}
      <Container className="spacing-lg">
        {/* <h2 className="title center">ICONic Clients</h2> */}
        <GridAuto>
          <img src={Bird} alt="concrete forming ontario client" />
          <img src={CityToronto} alt="concrete forming ontario client" />
          <img src={Clearwater} alt="concrete forming ontario client" />
          <img src={Dufferin} alt="concrete forming ontario client" />
          <img src={Black} alt="concrete forming ontario client" />
          <img src={Hillcrest} alt="concrete forming ontario client" />
          <img src={Kiewit} alt="concrete forming ontario client" />
          <img src={Soncin} alt="concrete forming ontario client" />
          <img src={TomJones} alt="concrete forming ontario client" />
          <img src={Zenith} alt="concrete forming ontario client" />
        </GridAuto>
      </Container>
      {/* </Section> */}
    </Wrapper>
  )
}
