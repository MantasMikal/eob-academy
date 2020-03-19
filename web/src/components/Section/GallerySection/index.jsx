import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import GalleryPreviewLayout from '../../gallery-preview-layout'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './GallerySection.module.scss'

const GallerySection = ({ galleryNodes }) => {
  const isDark = useDarkContext()
  
  return (
    <Container
      className={cn(styles.GallerySection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
    >
      <Type as="h2" size="displayLarge" className={styles.Title}>
        Gallery
      </Type>
      <GalleryPreviewLayout nodes={galleryNodes} />
    </Container>
  )
}

GallerySection.propTypes = {}

export default GallerySection
