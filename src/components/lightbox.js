import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

import { Section, Container } from "./layoutComponents"
import ClientsSmall from "../components/clientsSmall"

const dialogStyle = {
  width: "80vw",
  minHeight: "80vh",
}

const imgStyle = {
  minHeight: "80vh",
}

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  row-gap: 2em;
`

const PreviewButton = styled.button`
  margin: 0;
  padding: 0;
  position: relative;
  clip-path: var(--clip-both);
  height: 350px;

  .img {
    object-fit: cover;
    height: 100%;
    border-top: 6px solid var(--clr-accent);
    border-bottom: 6px solid var(--clr-accent);
  }

  &:hover {
    cursor: pointer;
    background: var(--clr-dark);

    .img {
      opacity: 0.3;
    }

    div {
      display: block;
    }
  }
`

const ProjectText = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  color: var(--txt-light);

  p {
    font-size: var(--fs-b);
    font-weight: var(--fw-600);
    text-transform: capitalize;
    text-align: left;
  }
`

const P = styled.p`
  width: 100%;
  max-width: 70ch;
  margin: var(--spacer) auto 0;
`

const Close = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
`

export default class Lightbox extends Component {
  static propTypes = {
    projectImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const { projectImages } = this.props
    const { selectedImage, showLightbox } = this.state

    return (
      <Fragment>
        <Section className="spacing-lg">
          <Container className="spacing-lg">
            <div className="center spacing">
              <h2 className="title">ICONic projects</h2>
              <P className="left">
                We combine products from some of the leading brands along with
                our own in-house design, manufacturing and project management
                expertise to enhance our customer’s overall project execution.
              </P>
            </div>
            <LightboxContainer>
              {projectImages.map(image => (
                <PreviewButton
                  key={image.node.childImageSharp.gatsbyImageData}
                  type="button"
                  onClick={() => {
                    this.setState({ showLightbox: true, selectedImage: image })
                    document.getElementById("header").style.display = "none"
                  }}
                >
                  <GatsbyImage
                    image={image.node.childImageSharp.gatsbyImageData}
                    alt=""
                    className="img"
                  />
                  <ProjectText>
                    <p>
                      {image.node.relativePath
                        .split("-")
                        .join(" ")
                        .replace(".png", "")}
                    </p>
                  </ProjectText>
                </PreviewButton>
              ))}
            </LightboxContainer>
            {showLightbox && (
              <Dialog className="spacing" style={dialogStyle}>
                <Close
                  type="button"
                  onClick={() => {
                    this.setState({ showLightbox: false })
                    document.getElementById("header").style.display = "block"
                  }}
                >
                  Close
                </Close>
                <p className="body body--large">
                  {selectedImage.node.relativePath
                    .split("-")
                    .join(" ")
                    .replace(".png", "")}
                </p>
                <GatsbyImage
                  style={imgStyle}
                  image={selectedImage.node.childImageSharp.gatsbyImageData}
                  alt=""
                />
              </Dialog>
            )}
          </Container>
          {/* clients removed until further notice */}
          {/* <ClientsSmall /> */}
        </Section>
      </Fragment>
    )
  }
}
