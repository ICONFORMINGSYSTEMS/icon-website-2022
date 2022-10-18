import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"
const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        projectImages: allFile(
          filter: { sourceInstanceName: { eq: "projects" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox projectImages={data.projectImages.edges} />}
  />
)
export default Projects
