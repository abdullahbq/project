import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="fat-text pb-2 border-bottom text-center">Blog Posts</h2>
        <div className="row justify-content-center py-5">
          {data.allMdx.edges.map((edge, i) => {
            return (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <Link to={`/blog${edge.node.fields.slug}`}>
                  <div className="card shadow mb-4">
                    <div className="figure">
                      <Image
                        style={{ borderRadius: "0px" }}
                        filename={`${edge.node.frontmatter.image}.jpg`}
                        alt={edge.node.frontmatter.image}
                      />

                      <div className="figcaption-on">
                        <h5 className="fw-bold text-warning">
                          {edge.node.frontmatter.title}
                        </h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>{edge.node.frontmatter.description}</p>

                      <small className="text-muted">
                        {edge.node.frontmatter.date}
                      </small>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}{" "}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/.*.(md)/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            image
          }
        }
      }
    }
  }
`
