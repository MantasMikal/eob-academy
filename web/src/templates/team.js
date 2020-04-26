import React from 'react'
import { graphql } from 'gatsby'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import TeamSection from 'Section/TeamSection'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query TeamTemplateQuery($id: String!) {
    team: sanityTeam(id: { eq: $id }) {
      id
      title
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
          _id
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      }
  }
`

const TeamTemplate = props => {
  const { data, errors, pageContext } = props
  const team = data && data.team
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {team && (
        <SEO
          title={team.title}
          image={team.logo && team.logo}
          slug={`/team/${team.slug.current}`}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {team && <TeamSection team={team} url={pageContext.absPath} />}
    </Layout>
  )
}

export default TeamTemplate
