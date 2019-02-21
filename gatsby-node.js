const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      project: allContentfulProject {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
    .then(res => {
      res.data.project.edges.forEach(({ node }) => {
        createPage({
          path: `projects/${node.title}`,
          component: path.resolve("./src/templates/project.js"),
          context: {
            id: node.id
          }
        });
      });
    })
    .catch(err => console.log(err));
};
