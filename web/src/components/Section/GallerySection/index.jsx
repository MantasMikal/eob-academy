import React from 'react'
import { array } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import GalleryPreviewLayout from 'Common/GalleryPreviewLayout'
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
      <GalleryPreviewLayout nodes={galleryNodes} surround />
    </Container>
  )
}

GallerySection.propTypes = {
  galleryNodes: array
}

export default GallerySection
