import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }
`

export default function Symons() {
  return (
    <Flex>
      <StaticImage
        src={"../images/symons-logo.png"}
        placeholder="blurred"
        alt="concrete forming ontario"
        layout="fixed"
        width={30}
        height={30}
      />
      <p>Authorized Symons Distributor</p>
    </Flex>
  )
}
