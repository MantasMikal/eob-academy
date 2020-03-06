import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Icon from 'Primitive/Icon'
import Hero from 'Common/Hero/Hero'
import Seperator from 'Primitive/Seprator'
import DescriptionCard from 'Common/DescriptionCard/DescriptionCard'

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
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <DescriptionCard
          icon="controller"
          title="What"
          description="An Academy that offers small class sizes, creates video games and grassroots esport teams."
        />
        <DescriptionCard
          icon="people"
          title="Who"
          description="Young people from all backgrounds working together to push each other to the next level."
        />
        <DescriptionCard
          icon="books"
          title="The Content"
          description="Young people from all backgrounds working together to push each other to the next level."
        />
        <DescriptionCard
          icon="play"
          title="Get Involved"
          description="Express your interest by clicking the button to get to our contact page – then email us."
        />
      </div>
      <Container size="wide" center gutter>
        <h1 hidden>Welcome to {site.title}</h1>
        {projectNodes && (
          <ProjectPreviewGrid
            title="Latest projects"
            nodes={projectNodes}
            browseMoreHref="/projects/"
          />
        )}
        {postNodes && (
          <BlogPostPreviewGrid
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/blog/"
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
