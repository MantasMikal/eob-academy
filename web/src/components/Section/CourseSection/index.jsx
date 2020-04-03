import React from 'react'
import { string, shape, arrayOf, bool, object } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import GatsbyImage from 'gatsby-image'

import Course from 'Common/Course'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './CourseSection.module.scss'

const CourseSection = ({ courseNodes }) => {
  const isDark = useDarkContext()
  const { pageTitle, subtitle, description, logo, courseList } = courseNodes
  return (
    <Container
      className={cn(styles.CourseSection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <div className={styles.Intro}>
        <div className={styles.IntroInner}>
          <Type as="h1" size="displayLarge" className={styles.Title}>
            {pageTitle}
          </Type>
          <Type as="h3" size="titleMedium" className={styles.Subtitle}>
            {subtitle}
          </Type>
          <Type as="p" size="base" className={styles.Description}>
            {description}
          </Type>
        </div>
        {logo && logo.asset && (
          <div className={styles.Logo}>
            <GatsbyImage fluid={logo.asset.fluid} alt={logo.alt} />
          </div>
        )}
      </div>
      {courseList.length > 0 ? (
        <div className={styles.Courses}>
          {courseList.map((course, i) => (
            <Course
              className={styles.Course}
              title={course.title}
              description={course._rawDescription}
              location={course.location}
              launchDate={course.launchDate}
              duration={course.duration}
              ages={course.ages}
              image={course.image}
              reverse={i % 2 !== 0}
              key={course._key}
            />
          ))}
        </div>
      ) : null}
    </Container>
  )
}

CourseSection.propTypes = {
  courseNodes: shape({
    pageTitle: string,
    subtitle: string,
    description: string,
    courseList: arrayOf(
      shape({
        title: string,
        description: object,
        location: string,
        launchDate: string,
        duration: string,
        ages: string,
        image: object,
        reverse: bool
      })
    )
  })
}

export default CourseSection
