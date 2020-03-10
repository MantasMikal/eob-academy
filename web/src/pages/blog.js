import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostCarousel from '../components/Common/BlogPostCarousel/BlogPostCarousel'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        {postNodes && postNodes.length > 0 && <BlogPostCarousel nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default BlogPage
