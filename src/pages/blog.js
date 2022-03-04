import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"

export const pageQuery = graphql`
  query MyQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/.*.(md)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Blog Posts</h2>
        <div className="row justify-content-center py-5">
          {data.allMdx.edges.map((edge, i) => {
            return (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <Image
                      className="card-img-top mb-4"
                      style={{ margin: "0 auto" }}
                      filename={edge.node.frontmatter.image}
                      alt={edge.node.frontmatter.image}
                    />
                    <h4 className="card-title">
                      {edge.node.frontmatter.title}
                    </h4>
                    <p className="card-text">{edge.node.frontmatter.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-warning"
                      >
                        <Link to={`/blog${edge.node.fields.slug}`}>
                          Read More
                        </Link>
                      </button>

                      <small className="text-muted">
                        {edge.node.frontmatter.date}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}{" "}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
