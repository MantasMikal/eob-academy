import React from 'react'
import { string, object, bool, array } from 'prop-types'
import GatsbyImage from 'gatsby-image'
import { formatDate, cn } from 'lib/helpers'

import { useDarkContext } from 'Context/DarkContext'

import BlockContent from '../../block-content'
import ListItem from './component/ListItem'
import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'

import styles from './Course.module.scss'
import ZoomableMedia from '../Zoomable'
import ButtonStandard from 'Primitive/ButtonStandard'

// TODO
// Add button function

const Course = ({
  title,
  description,
  location,
  launchDate,
  duration,
  ages,
  image,
  reverse,
  className
}) => {
  const isDark = useDarkContext()
  return (
    <div
      className={cn(styles.Course, reverse && styles.reverse, isDark && styles.isDark, className)}
    >
      {image && image.asset && (
        <div className={styles.Poster}>
          <ZoomableMedia alt={image.alt} media={image} />
        </div>
      )}
      <div className={styles.CourseDescription}>
        <Type as='h3' size='titleLarge' className={styles.Title}>
          {title}
        </Type>
        <div className={styles.Description}>
          {description && <BlockContent blocks={description} />}
        </div>
        {image && image.asset && (
          <div className={cn(styles.Poster, styles.posterMobile)}>
            <GatsbyImage alt={image.alt} fluid={image.asset.fluid} />
          </div>
        )}
        <ul className={styles.Details}>
          <ListItem title='Location' icon='location-arrow' value={location} />
          <ListItem title='Launch' icon='calendar' value={formatDate(launchDate)} />
          <ListItem title='Duration' icon='clock' value={duration} />
          <ListItem title='Ages' icon='person' value={ages} />
        </ul>
        <SmartLink href="mailto:info@eobacademy.com" className={styles.Button}>
          <ButtonStandard>
            <Type size='base' demi>
              Apply
            </Type>
          </ButtonStandard>
        </SmartLink>
      </div>
    </div>
  )
}

Course.propTypes = {
  title: string,
  description: array,
  location: string,
  launchDate: string,
  duration: string,
  ages: string,
  image: object,
  reverse: bool
}

export default Course
