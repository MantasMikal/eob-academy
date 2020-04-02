import React from 'react'
import { graphql } from 'gatsby'
import BlockSection from 'Section/BlockSection'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const ContactPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.page

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <BlockSection title={page.title} blockContent={page._rawBody || []} />
    </Layout>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage
