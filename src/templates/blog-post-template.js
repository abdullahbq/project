import React from "react"
import Image from "../components/Images/Images"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "react-bootstrap-icons"

const BlogPostTemplate = ({ data, pageContext }) => {
  const { mdx } = data
  const { prev, next } = pageContext
  return (
    <Layout>
      <div className="figure rounded-0">
        <Image
          style={{ margin: "0 auto", height: "200px", width: "100%" }}
          filename={mdx.frontmatter.image}
          alt={mdx.frontmatter.image}
        />
        <div className="figcaption">
          <div className="text-center">
            {prev ? (
              <Link
                to={`/blog${prev.node.fields.slug}`}
                className="btn text-center border-primary shadow m-2"
              >
                <span className="text-primary">
                  <ArrowLeft /> {prev.node.frontmatter.title}
                </span>
              </Link>
            ) : (
              <div></div>
            )}

            {next ? (
              <Link
                to={`/blog${next.node.fields.slug}`}
                className="btn text-center border-primary shadow m-2"
              >
                <span className="text-primary">
                  {next.node.frontmatter.title} <ArrowRight />
                </span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="card card-body shadow mb-4">
              <h1 class="text-primary fat-text">{mdx.frontmatter.title}</h1>
              <p>
                Written by: <strong>{mdx.frontmatter.author}</strong>
              </p>
              <p>
                Posted on: <strong>{mdx.frontmatter.date}</strong>
              </p>
              <hr />

              <MDXProvider>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>

            <div className="text-center">
              {prev ? (
                <Link
                  to={`/blog${prev.node.fields.slug}`}
                  className="btn text-center border-primary shadow m-2"
                >
                  <span className="text-primary">
                    <ArrowLeft /> {prev.node.frontmatter.title}
                  </span>
                </Link>
              ) : (
                <div></div>
              )}

              {next ? (
                <Link
                  to={`/blog${next.node.fields.slug}`}
                  className="btn text-center border-primary shadow m-2"
                >
                  <span className="text-primary">
                    {next.node.frontmatter.title} <ArrowRight />
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card text-center card-body shadow mb-4">
              <Image
                className="d-block mx-lg-auto img-fluid"
                style={{
                  margin: "0 auto",
                  height: "200px",
                  width: "200px",
                  borderRadius: "100%",
                }}
                filename={`${mdx.frontmatter.author}.jpg`}
                alt="1"
              />
              <h3 className="m-3">{mdx.frontmatter.author}</h3>

              <ul class="list-unstyled justify-content-center d-flex">
                <Link to="">
                  <Facebook class="m-2" size="20" />
                </Link>
                <Link to="">
                  <Instagram class="m-2" size="20" />
                </Link>
                <Link to="">
                  <Linkedin class="m-2" size="20" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      fields {
        slug
      }
      frontmatter {
        title
        author
        date
        image
      }
    }
  }
`
