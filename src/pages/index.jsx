import React from 'react'
import Box from '@material-ui/core/Box'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Home ({ data }) {
  return (
    <Layout>
      <Box height='500rem' bgcolor='teal'>
        <h1 style={{ paddingTop: '300px', textAlign: 'center' }}>
          {data.allContentfulPage.nodes[0].title}
        </h1>
        <h3 style={{ textAlign: 'center' }}>
          {data.allContentfulPage.nodes[0].pageNumber}
        </h3>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPage {
      nodes {
        title
        pageNumber
      }
    }
  }
`
