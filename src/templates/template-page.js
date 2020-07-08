import React from 'react'
import Layout from '../components/layout'
import { Box } from '@material-ui/core'
import { graphql } from 'gatsby'

const TemplatePage = ({ data }) => {
  return (
    <Layout>
      <Box height='500rem' bgcolor='teal'>
        <h1 style={{ paddingTop: '300px', textAlign: 'center' }}>
          {data.contentfulGatsbyStarterPage.title}
        </h1>
        <h3 style={{ textAlign: 'center' }}>
          {data.contentfulGatsbyStarterPage.pageNumber}
        </h3>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($pageNumber: Int!) {
    contentfulGatsbyStarterPage(pageNumber: { eq: $pageNumber }) {
      title
      pageNumber
    }
  }
`

export default TemplatePage
