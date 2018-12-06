const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/components/postLayout.js');
    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `).then(res => {
        if (res.errors) {
          reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `/posts${edge.node.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {
              slug: `${edge.node.frontmatter.slug}`,
            },
          });
        });
      }),
    );
  });
};
