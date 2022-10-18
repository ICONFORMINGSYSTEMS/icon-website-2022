import styled from "styled-components"

const device = {
  md: "48em",
}

export const Container = styled.div`
  width: 92%;
  margin: 0 0 0 auto;

  @media screen and (max-width: ${device.md}) {
    width: 85%;
    margin: 0 auto;
    max-width: 65rem;
  }
`

// on mobile Flex different than layoutComponents Flex
export const Flex = styled.div`
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
      margin-left: 0;
      margin-top: var(--spacer);
      margin-bottom: var(--spacer);
    }
  }

  p:first-child {
    margin-top: var(--spacer);
  }
`

export const List = styled.ul`
  margin: var(--spacer) 0 var(--spacer) 0.8em;
  padding: 0;
  list-style: "✓";

  li {
    margin: var(--spacer-sm) 0;
    padding: 0 0 0 0.5em;
  }
`

export const Img = styled.img`
  height: 100vh;
  min-width: 100%;
  width: 100%;
  object-fit: cover;
  clip-path: var(--clip-left);

  @media screen and (max-width: ${device.md}) {
    height: auto;
  }
`

export const ImgUnclipped = styled.img`
  object-fit: cover;
`
