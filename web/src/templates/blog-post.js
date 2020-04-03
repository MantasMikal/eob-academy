import React from 'react'
import { graphql } from 'gatsby'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from 'Common/BlogPost'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      category {
        color {
          hex
        }
        title
      }
      mainImage {
        asset {
          _id
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
          url
          metadata {
            dimensions {
              width
              height
            }
          }
        }
        alt
      }
      title
      slug {
        current
      }
      readTime
      _rawHighlightedText
      _rawBody(resolveReferences: { maxDepth: 5 })
      seo {
        seo {
          focus_keyword
          focus_synonyms
          seo_title
          meta_description
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  const seo = data && data.post && data.post.seo && data.post.seo.seo
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={seo ? seo.seo_title : post.title}
          description={seo ? seo.meta_description : ''}
          keySentence={seo ? seo.focus_keyword : ''}
          image={post.mainImage && post.mainImage}
          slug={`/blog/${post.slug.current}`}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
