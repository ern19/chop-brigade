import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    {data.allContentfulBlogPost.edges.map(({node}) => 
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
  allContentfulBlogPost {
    edges {
      node {
        thumbnail {
          file {
            url
          }
        }
        title
        body {
          childMarkdownRemark {
            excerpt
          }
          id
  				body
        }
        createdAt(formatString: "MMMM DD, YYYY")
        slug
        id
      }
    }
  }
}
`