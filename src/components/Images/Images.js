import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return null
      }
      return (
        <GatsbyImage
          alt={props.alt}
          image={getImage(image.node.childImageSharp)}
          className={props.className}
          style={props.style}
        />
      )
    }}
  />
)

export default Image
