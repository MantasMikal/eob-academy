import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import CourseSection from 'Section/CourseSection'

export const query = graphql`
  query AlternativeSchoolCoursePageQuery {
    coursePage: allSanityCoursesPage(filter: { _id: { eq: "alternativeSchoolsCourses" } }) {
      edges {
        node {
          _key
          pageTitle
          subtitle
          description
          logo {
            asset {
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          courseList {
            _key
            title
            location
            launchDate
            duration
            ages
            image {
              asset {
                fluid(maxWidth: 900) {
                  ...GatsbySanityImageFluid
                }
              }
              alt
            }
            _rawDescription(resolveReferences: { maxDepth: 5 })
          }
        }
      }
    }
  }
`

const AlternativeSchoolsCourses = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  if (!data.coursePage) {
    throw new Error('Could not fetch courses')
  }

  const courseNodes = (data || {}).coursePage ? mapEdgesToNodes(data.coursePage)[0] : []

  // TODO
  // Add keywords to SEO

  return (
    <Layout>
      {courseNodes && courseNodes.pageTitle && (
        <>
          <SEO
            title={courseNodes.pageTitle}
            description={courseNodes.description ? courseNodes.description : ''}
            slug={'/alternative-schools-courses'}
          />
          <h1 hidden>{courseNodes.pageTitle}</h1>
        </>
      )}
      {courseNodes && <CourseSection courseNodes={courseNodes} />}
    </Layout>
  )
}

export default AlternativeSchoolsCourses
