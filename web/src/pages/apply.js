import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import ApplySection from 'Section/ApplySection'
import { Helmet } from 'react-helmet'
import useScript from '../components/Hooks/useScript'

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
  // useScript(`hbspt.forms.create({
  //   region: "eu1",
  //   portalId: "24888008",
  //   formId: "76b72dd9-bd61-4614-82fb-e42421c72f03"
  //   });`)
  return (
    <>
    {/* <Helmet>
      <script charset="utf-8" type="text/javascript" src="https://js-eu1.hsforms.net/forms/shell.js" />
    </Helmet> */}
    <Layout>
      <SEO title={title} slug='/apply' />
      <ApplySection title={title} blocks={blocks} />
    </Layout>
    </>
  )
}

export default ApplyPage
