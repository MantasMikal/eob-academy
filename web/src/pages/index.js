import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostCarousel from 'Common/BlogPostCarousel/BlogPostCarousel'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Type from 'Primitive/Type'
import Hero from 'Common/Hero/Hero'
import Seperator from 'Primitive/Seprator'
import DescriptionCards from 'Common/DescriptionCards/DescriptionCards'
import SmartLink from 'Primitive/SmartLink'
import descriptionCards from '../fixture/description-cards'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
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

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
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

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  // TODO
  // make dynamic

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Hero
        title="EOB Academy the UK's first Esports Academy and Video Games Centre"
        subtitle="EOB Academy the UK's first Esports Academy and Video Games Centre"
      />
      <Seperator />
      <Container size="wide" center gutter>
        <DescriptionCards cards={descriptionCards().cards} />
      </Container>
      <Seperator />

      <h1 hidden>Welcome to {site.title}</h1>
      {/* {projectNodes && (
          <ProjectPreviewGrid
            title="Latest projects"
            nodes={projectNodes}
            browseMoreHref="/projects/"
          />
        )} */}
      <div style={{ overflow: 'hidden', margin: '2rem 0' }}>
        <Container size="wide" center gutter>
          <Type size="title2">Latest blog posts</Type>
          <SmartLink>
            <Type style={{ color: '#c8167c', marginTop: '2rem' }} size="subtitle">
              VIEW ALL
            </Type>
          </SmartLink>
          <div style={{ margin: '6rem 0' }}>
            {postNodes && (
              <BlogPostCarousel
                title="Latest blog posts"
                nodes={postNodes}
                browseMoreHref="/blog/"
              />
            )}
          </div>
        </Container>

      </div>
    </Layout>
  )
}

export default IndexPage
