import React from 'react'
import Link from 'gatsby-link'
import { query } from '../layouts';

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    
  </div>
)

export default IndexPage

export const SiteMeta = graphql`
query SiteMeta {
  site {
    siteMetadata{
      title
      desc
    }
  }
}
`