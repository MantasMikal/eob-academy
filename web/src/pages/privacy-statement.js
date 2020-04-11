import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import BlockSection from 'Section/BlockSection'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query PrivacyPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)privacyStatement/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const PrivacyStatement = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error('Missing page data.')
  }

  return (
    <Layout>
      <SEO title={page.title} slug='/privacy-statement' />
      <BlockSection title={page.title} blockContent={page._rawBody || []} />
    </Layout>
  )
}

export default PrivacyStatement
