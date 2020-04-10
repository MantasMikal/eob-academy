import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Map from 'Common/Map'
// import Ground from 'Common/Map'

import styles from './MapSection.module.scss'

const MapSection = ({ title }) => {
  const isDark = useDarkContext()
  return (
    <section className={cn(styles.GelleryCarouselSection, isDark && styles.isDark)}>
      <Container size='wide' center gutter spacious>
        <Type size='displayLarge' as='h2' className={styles.Title}>
          {title}
        </Type>
        <div className={styles.MapWrapper}>
          <Map />
        </div>
      </Container>
    </section>
  )
}

MapSection.propTypes = {}

export default MapSection
