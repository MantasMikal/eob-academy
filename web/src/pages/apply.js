import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import ApplySection from 'Section/ApplySection'

export const query = graphql`
  query ApplyPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)apply/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const ApplyPage = props => {
  const blocks = props.data && props.data.page._rawBody
  const title = props.data && props.data.page.title
  return (
    <Layout>
      <SEO title={title} slug='/apply' />
      <ApplySection title={title} blocks={blocks} />
    </Layout>
  )
}

export default ApplyPage
