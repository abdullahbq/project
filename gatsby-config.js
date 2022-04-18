module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/shop`,
        name: `shop`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        //replace with own Snipcart API key
        apiKey:
          "NmNkZDk5MDEtYjEyZC00ZmY2LWE4NjEtYWRjYmE4YjBkYTNlNjM3ODUzNzM1Njc0NDQyMjgz",
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
  ],
}
