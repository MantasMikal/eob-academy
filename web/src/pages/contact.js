import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import ContactSection from 'Section/ContactSection'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }

    company: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      locations {
        lng
        lat
      }
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
  const company = data.company
  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} slug='/contact' />
      <ContactSection
        title='About'
        blocks={page._rawBody}
        locations={company.locations && company.locations}
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
