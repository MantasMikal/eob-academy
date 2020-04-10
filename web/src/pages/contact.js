import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import ContactSection from 'Section/ContactSection'

export const query = graphql`
  query ContactPageQuery {
    contact: allSanityContactPage {
      edges {
        node {
          _rawBody(resolveReferences: { maxDepth: 5 })
          _rawVenues(resolveReferences: { maxDepth: 10 })
        }
      }
    }

    # page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
    #   title
    #   _rawBody(resolveReferences: { maxDepth: 5 })
    # }

    # company: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
    #   locations {
    #     lng
    #     lat
    #   }
    # }
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

  if (!data.contact) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  const contact = (data || {}).contact ? mapEdgesToNodes(data.contact) : []
  console.log('contact', contact)

  return (
    <Layout>
      <SEO title='Contact' slug='/contact' />
      <ContactSection
        title='Contact'
        body={contact[0]._rawBody && contact[0]._rawBody}
        venues={contact[0]._rawVenues}
      />
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
