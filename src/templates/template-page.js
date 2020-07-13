import React from 'react'
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image'
import { makeStyles, Box, Container, Grid } from '@material-ui/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  hero: {
    height: '100vh'
  }
}))

const TemplatePage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <BackgroundImage
        fluid={data.contentfulPage.heroImage.fluid}
        className={classes.hero}
      >
        hello
      </BackgroundImage>
      {/* <Box height='500rem' bgcolor='teal'>
        <h1 style={{ paddingTop: '300px', textAlign: 'center' }}>
          {data.contentfulPage.title}
        </h1>
        <h3 style={{ textAlign: 'center' }}>
          {data.contentfulPage.pageNumber}
        </h3>
        <Img fixed={data.contentfulPage.heroImage.fixed} />
        <p>{data.contentfulPage.title}</p>
        <Container>
          <Grid container>
            <Grid item md={4}>
              <Img fixed={data.contentfulPage.heroImage.fixed} />
            </Grid>
            <Grid item md={4}>
              <Img fixed={data.contentfulPage.heroImage.fixed} />
            </Grid>
            <Grid item md={4}>
              <Img fixed={data.contentfulPage.heroImage.fixed} />
            </Grid>
          </Grid>
          <Img fluid={data.contentfulPage.heroImage.fluid} />
        </Container>
      </Box> */}
    </Layout>
  )
}

export const query = graphql`
  query($pageNumber: Int!) {
    contentfulPage(pageNumber: { eq: $pageNumber }) {
      title
      pageNumber
      heroImage {
        fixed(width: 125, height: 125) {
          ...GatsbyContentfulFixed_noBase64
        }
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

export default TemplatePage
