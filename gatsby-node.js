const TEMPLATE_PATH = './src/client/templates/';

const creatBlogPostPages = async (setup) => {
  const { actions, graphql, reporter } = setup;
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`${TEMPLATE_PATH}markdown/blog.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  creatBlogPostPages({ actions, graphql, reporter });
};
