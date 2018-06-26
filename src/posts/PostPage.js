import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        <span>{data.contentfulBlogPost.data}</span>
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
	query BlogPostQuery {
    contentfulBlogPost(slug: {eq:"first-contentful-post" }) {
      title
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