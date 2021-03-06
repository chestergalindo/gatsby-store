import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from "../components"

import { SEO } from "../components"

export const query = graphql`
  query DESCRIP {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/">Go to gracias</Link>
    </>
  )
}

export default IndexPage
