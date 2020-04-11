import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import BlockSection from 'Section/BlockSection'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query TermsAndConditionsPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)termsAndConditions/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const TermsAndConditions = props => {
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
      <SEO title={page.title} slug='/terms-and-conditions' />
      <BlockSection title={page.title} blockContent={page._rawBody || []} />
    </Layout>
  )
}

export default TermsAndConditions
