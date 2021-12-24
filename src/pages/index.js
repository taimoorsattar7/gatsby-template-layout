import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogIndex = ({ location }) => {
  return <Layout location={location}>Index Page</Layout>
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
