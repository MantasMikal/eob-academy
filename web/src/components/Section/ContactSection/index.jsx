import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import BlockContent from '../../block-content'
import Map from 'Common/Map'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './ContactSection.module.scss'

const createVenue = _rawVenue => (
  <div className={styles.Venue} key={_rawVenue._key}>
    <div className={styles.BlockWrapper}>
      <BlockContent blocks={_rawVenue.body} />
    </div>
    <div className={styles.MapWrapper}>
      {_rawVenue.location && (
        <Map center={_rawVenue.location} mpaId={_rawVenue._key} locations={[_rawVenue.location]} />
      )}
    </div>
  </div>
)

const ContactSection = ({ body, venues, title }) => {
  const isDark = useDarkContext()
  return (
    <Container
      className={cn(isDark && styles.isDark)}
      size='wide'
      center
      gutter
      spacious
      withNavSpace
      as='section'
    >
      <Type as='h1' size='displayLarge' className={styles.Title}>
        {title}
      </Type>
      {body && (
        <div className={styles.Body}>
          <BlockContent blocks={body} />
        </div>
      )}
      <div className={styles.VenueWrapper}>{venues && venues.map(venue => createVenue(venue))}</div>
    </Container>
  )
}

ContactSection.propTypes = {}

export default ContactSection
