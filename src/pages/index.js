import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  return <Layout location={location}>

    <div>{data.site.siteMetadata.title}</div>
  </Layout>
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
