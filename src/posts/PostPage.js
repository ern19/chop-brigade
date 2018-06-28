import React, { Component } from 'react'
import Img from 'gatsby-image'

export default class componentName extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        <span>{data.contentfulBlogPost.createdAt}</span>
        <h1>{data.contentfulBlogPost.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html
        }}
        />
      </div>
    )
  }
}

export const query = graphql`
	query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD YYYY")
      thumbnail {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt
        }
        id
        body
      }
      slug
      id
    }
  }
`