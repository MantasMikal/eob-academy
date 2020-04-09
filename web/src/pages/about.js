import React from 'react'
import { mapEdgesToNodes } from 'lib/helpers'

import { graphql } from 'gatsby'
import BlockSection from 'Section/BlockSection'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import SponsorsSection from 'Section/SponsorsSection'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }

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
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const sponsorNodes = (data || {}).sponsors ? mapEdgesToNodes(data.sponsors)[0] : []

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} slug='/about' />
      <BlockSection title={page.title} blockContent={page._rawBody || []} />
      <SponsorsSection title='Testimonials' sponsorNodes={sponsorNodes} />
    </Layout>
  )
}

export default AboutPage
