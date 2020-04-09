import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from 'Common/Hero'
import Seperator from 'Primitive/Seprator'
import DescriptionCardSection from 'Section/DescriptionCardSection'
import BlogPostCarouselSection from 'Section/BlogPostCarouselSection'

// import MapSection from 'Section/MapSection'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    # gallery: allSanityGalleryMedia(
    #   limit: 10
    #   sort: { fields: [publishedAt], order: DESC }
    #   filter: { isFeatured: { eq: true } }
    # ) {
    #   edges {
    #     node {
    #       id
    #       title
    #       publishedAt
    #       media {
    #         alt
    #         caption
    #         asset {
    #           fluid(maxWidth: 600) {
    #             ...GatsbySanityImageFluid
    #           }
    #         }
    #       }
    #     }
    #   }
    # }

    sponsors: allSanitySponsors {
      edges {
        node {
          sponsorList {
            _key
            name
            qouteHeading
            qouteBody
            url
            image {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
              alt
            }
          }
          videos {
            videoType
            videoId
            caption
          }
        }
      }
    }

    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { isFeatured: { eq: true } }
    ) {
      edges {
        node {
          id
          publishedAt
          isFeatured
          readTime
          category {
            color {
              hex
            }
            title
          }
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

  // const galleryNodes = (data || {}).gallery ? mapEdgesToNodes(data.gallery) : []

 
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
      <h1 hidden>Welcome to {site.title}</h1>
      <Hero
        title="EOB Academy the UK's first Esports Academy and Video Games Centre"
        subtitle="EOB Academy the UK's first Esports Academy and Video Games Centre"
      />
      <Seperator />
      <DescriptionCardSection />
      <Seperator />
      <BlogPostCarouselSection
        postNodes={postNodes}
        browseMoreHref="/blog/"
        title="Featured Blog Posts"
      />
      {/* <Seperator /> */}
      {/* <GelleryCarouselSection
        galleryNodes={galleryNodes}
        browseMoreHref="/gallery/"
        title="EOB Academy in action"
      /> */}
      {/* <Seperator /> */}
      {/* <MapSection title='Find us' /> */}
      {/* <Seperator /> */}
    </Layout>
  )
}

export default IndexPage
