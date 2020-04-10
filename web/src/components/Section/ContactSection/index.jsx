import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import BlockContent from '../../block-content'
import Map from 'Common/Map'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './ContactSection.module.scss'

const ContactSection = ({ blocks, locations, title }) => {
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
      <div className={styles.ContactSection}>
        <div className={styles.BlockWrapper}>
          <BlockContent blocks={blocks} />
        </div>
        <div className={styles.MapWrapper}>
          <Map locations={locations} />
        </div>
      </div>
    </Container>
  )
}

ContactSection.propTypes = {}

export default ContactSection
