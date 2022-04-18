import React from "react"
import { graphql } from "gatsby"
import BlogFilter from "../components/BlogFilter/BlogFilter"
import Layout from "../components/Layout/Layout"

const Shop = ({ data }) => {
  return (
    <Layout>
      <div className="container-fluid py-5">
        <h2 className="fat-text pb-2 border-bottom text-center">Shop</h2>
        <div className="row justify-content-center">
          <BlogFilter items={data} />
        </div>
      </div>
    </Layout>
  )
}

export default Shop

export const pageQuery = graphql`
  query ShopQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(shop)/.*.(md)/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            price
            image
            category
          }
        }
      }
    }
  }
`
