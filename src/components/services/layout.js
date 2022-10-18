import React from "react"
import styled from "styled-components"
import { Section } from "../layoutComponents"
import { Container } from "./serviceItems"

export default function Layout({ children }) {
  return (
    <Section>
      <Container className="spacing-lg">{children}</Container>
    </Section>
  )
}
