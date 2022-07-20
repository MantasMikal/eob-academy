import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import CourseSection from 'Section/CourseSection'

export const query = graphql`
  query OnlineCoursePageQuery {
    coursePage: allSanityCoursesPage(filter: { _id: { eq: "onlineCourses" } }) {
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
            launchDates
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

const OnlineCourses = props => {
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
    <Layout isNoticeVisible>
      { courseNodes && courseNodes.pageTitle && (
        <>
          <SEO
            title={courseNodes.pageTitle}
            description={courseNodes.description ? courseNodes.description : ''}
            slug={'/online-courses'}
          />
        </>
      )}
      {courseNodes && <CourseSection courseNodes={courseNodes} />}
    </Layout>
  )
}

export default OnlineCourses