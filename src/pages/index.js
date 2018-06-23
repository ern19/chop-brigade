import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) => 
       <PostListing key={node.id} post={node}/>
    )}    
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
	allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges {
      node {
      	frontmatter {
          title
          date(formatString: "MMM DD YYYY")
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}
`