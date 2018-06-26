import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
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