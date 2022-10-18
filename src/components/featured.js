import React from "react"
import styled from "styled-components"

import { Section, Container, Actions } from "./layoutComponents"
import { ButtonSecondaryDark } from "./buttons"

const device = {
  md: "48em",
}

// on mobile Flex different than layoutComponents Flex
const Flex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column-reverse;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin: var(--spacer) 0 var(--spacer) 0;
    }
  }
`

const Text = styled.div``

const Img = styled.img`
  object-fit: cover;
  clip-path: var(--clip-left);
`

export default function Featured(props) {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title center">recent concrete forming success</h2>
        <Flex>
          <Text className="spacing">
            <h3 className="heading">{props.heading}</h3>
            <p>{props.body}</p>
            <Actions>
              <ButtonSecondaryDark to="#projects">
                view all projects
              </ButtonSecondaryDark>
            </Actions>
          </Text>
          <div>
            <Img
              className="clip-left"
              src={props.img}
              alt="concrete forming company ontario"
            />
            <p className="center">{props.date}</p>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
