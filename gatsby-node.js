const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post-template.js`)
  const shopItemTemplate = path.resolve(`./src/templates/shop-item-template.js`)
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
    const shopItems = allPosts.filter(
      edge => edge.node.fields.collection === `shop`
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

    shopItems.forEach((post, index, arr) => {
      const prev = arr[index - 1]
      const next = arr[index + 1]

      createPage({
        path: `/shop${post.node.fields.slug}`,
        component: shopItemTemplate,
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
