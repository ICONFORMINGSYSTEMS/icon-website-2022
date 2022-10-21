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
              relativePath
              childImageSharp {
                gatsbyImageData
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
