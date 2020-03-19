import React from 'react'
import { string, object, bool } from 'prop-types'
import GatsbyImage from 'gatsby-image'
import { formatDate } from 'lib/helpers'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import ListItem from './component/ListItem'
import Type from 'Primitive/Type'
import ButtonStandard from 'Primitive/ButtonStandard'

import styles from './Course.module.scss'

//TODO
// Add button function

const Course = ({
  title,
  description,
  location,
  launchDate,
  duration,
  ages,
  image,
  alt,
  reverse,
  className
}) => {
  const isDark = useDarkContext()
  return (
    <div
      className={cn(styles.Course, reverse && styles.reverse, isDark && styles.isDark, className)}
    >
      <div className={styles.Poster}>
        <GatsbyImage alt={alt} fluid={image} />
      </div>
      <div className={styles.CourseDescription}>
        <Type as="h3" size="titleLarge" className={styles.Title}>
          {title}
        </Type>
        <Type as="p" size="base" className={styles.Description}>
          {description}
        </Type>
        <div className={cn(styles.Poster, styles.posterMobile)}>
          <GatsbyImage alt={alt} fluid={image} />
        </div>
        <ul className={styles.Details}>
          <ListItem title="Location" icon="location-arrow" value={location} />
          <ListItem title="Launch" icon="calendar" value={formatDate(launchDate)} />
          <ListItem title="Duration" icon="clock" value={duration} />
          <ListItem title="Ages" icon="person" value={ages} />
        </ul>
        <ButtonStandard className={styles.Button}>
          <Type size="base" demi>
            Apply
          </Type>
        </ButtonStandard>
      </div>
    </div>
  )
}

Course.propTypes = {
  title: string,
  description: string,
  location: string,
  launchDate: string,
  duration: string,
  ages: string,
  image: object,
  alt: string,
  reverse: bool
}

export default Course