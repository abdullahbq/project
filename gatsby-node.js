const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post-template.js`)
  const productItemTemplate = path.resolve(
    `./src/templates/product-item-template.js`
  )
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                collection
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const allPosts = result.data.allMdx.edges
    const blogPosts = allPosts.filter(
      edge => edge.node.fields.collection === `blog`
    )
    const productItems = allPosts.filter(
      edge => edge.node.fields.collection === `products`
    )

    blogPosts.forEach((post, index, arr) => {
      const prev = arr[index - 1]
      const next = arr[index + 1]

      createPage({
        path: `/blog${post.node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          prev: prev,
          next: next,
        },
      })
    })

    productItems.forEach((post, index, arr) => {
      const prev = arr[index - 1]
      const next = arr[index + 1]

      createPage({
        path: `/products${post.node.fields.slug}`,
        component: productItemTemplate,
        context: {
          slug: post.node.fields.slug,
          prev: prev,
          next: next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    const collection = getNode(node.parent).sourceInstanceName

    createNodeField({
      node,
      name: "collection",
      value: collection,
    })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
