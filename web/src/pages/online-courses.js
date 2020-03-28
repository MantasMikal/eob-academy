import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import CourseSection from 'Section/CourseSection'

export const query = graphql`
  query OnlineCoursePageQuery {
    coursePage:  allSanityCoursesPage(filter: {_id: {eq: "onlineCourses"}}) {
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
            description
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
    <Layout>
      <SEO title={courseNodes.pageTitle} description={courseNodes.description} />
      <h1 hidden>{courseNodes.pageTitle}</h1>
      <CourseSection courseNodes={courseNodes} />
    </Layout>
  )
}

export default OnlineCourses
