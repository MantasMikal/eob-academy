import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import ApplySection from 'Section/ApplySection'

// export const query = graphql`
//   query ApplyPageQuery {
//   }
// `

const ApplyPage = props => {
  return (
    <Layout>
      <SEO title='Apply' slug='/apply' />
      <ApplySection title='Apply' />
    </Layout>
  )
}

export default ApplyPage
