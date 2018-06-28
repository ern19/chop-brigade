import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'

const Thumbnail = styled.img`
  height: 120px;
  width: 120px;
  padding: 5px;
`
const BlogArticle = styled.article`
  display: flex;
  padding: 5px;
  box-shadow: 5px 2px 5px 2px #ccc;
  &:hover {
    box-shadow: 8px 4px 8px 4px #ccc;
  }
`

const PostListing = ({post}) => <BlogArticle>
  <Thumbnail src={post.thumbnail.file.url}/>
  <div>
    <div><Link to={post.slug}>{post.title}</Link><small> - {post.createdAt}</small></div>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </div>
</BlogArticle>;

export default PostListing;

