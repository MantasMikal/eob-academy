import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import GallerySection from 'Section/GallerySection'


export const query = graphql`
  query GalleryPageQuery {
    gallery: allSanityGalleryMedia(limit: 100, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          publishedAt
          media {
            alt
            caption
            
            asset {
              url
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
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


  const galleryNodes = (data || {}).gallery ? mapEdgesToNodes(data.gallery) : []


  
  if (!galleryNodes) {
    throw new Error(
      'Query returnend nothing!'
    )
  }

  // TODO
  // make dynamic
  return (
    <Layout>
      <SEO title='Gallery' description='TBA' keywords={['TBA']}  />
        <GallerySection galleryNodes={galleryNodes} />
    </Layout>
  )
}

export default IndexPage
