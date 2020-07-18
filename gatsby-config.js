module.exports = {
  siteMetadata: {
    title: `Samantha O'Gorman - Frontend Software Engineer`,
    description: `A personal website to showcase my skills and projects.`,
    author: `@samogorm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/main";`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown_pages/blog_posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#14233C`,
        theme_color: `#14233C`,
        display: `minimal-ui`,
        icon: `src/assets/images/sam-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        enabled: process.env.NODE_ENV !== "production",
        sidebar: {
          position: "displace",
        },
        plugins: [
          "gatsby-tinacms-git",
          "gatsby-tinacms-remark",
        ],
      },
    },
    'gatsby-tinacms-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    'gatsby-transformer-json',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
