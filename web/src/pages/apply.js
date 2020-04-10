import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import ContactForm from 'Common/ContactForm'

// export const query = graphql`
//   query ApplyPageQuery {
//   }
// `

const ApplyPage = props => {
  return (
    <Layout>
      <SEO title='Apply' slug='/apply' />
      <ContactForm />
    </Layout>
  )
}

export default ApplyPage
