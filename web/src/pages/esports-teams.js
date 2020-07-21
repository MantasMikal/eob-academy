import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import TeamsSection from 'Section/TeamsSection'

export const query = graphql`
  query TeamsPageQuery {
    page:  sanityTeamsPage(_id: {regex: "/(drafts.|)teamsPage/"}) {
    title
    _rawBody(resolveReferences: { maxDepth: 5 })
    teams {
      title
      slug {
          current
      }
      description
      location {
        lng
        lat
      }
      phone
      email
      discord
      address
      logo {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
  }
`

const TeamsPage = props => {
  const { _rawBody, title, teams} = props.data && props.data.page
  return (
    <Layout>
      <SEO title={title} slug='/esports-teams' />
      <TeamsSection title={title} blocks={_rawBody} teams={teams} />
    </Layout>
  )
}

export default TeamsPage
