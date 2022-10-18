import React from "react"
import { Section, Container, Actions } from "./layoutComponents"
import { ButtonSecondaryDark } from "./buttons"
import styled from "styled-components"

const Frame = styled.iframe``

export default function LinkedinFeed() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title center">recent concrete forming success</h2>
        <iframe
          src="https://www.sociablekit.com/app/embed/58768"
          height="700"
          width="100%"
        ></iframe>
        <Actions>
          <ButtonSecondaryDark to="#projects">
            view all projects
          </ButtonSecondaryDark>
        </Actions>
      </Container>
    </Section>
  )
}
