const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulPage {
        nodes {
          title
          pageNumber
        }
      }
    }
  `)
  result.data.allContentfulPage.nodes.forEach(({ title, pageNumber }) => {
    createPage({
      path: title.replace(' ', '-'),
      component: path.resolve(`./src/templates/template-page.js`),
      context: {
        pageNumber
      }
    })
  })
}
