import React from 'react'
import { array } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import GalleryPreview from 'Common/GalleryPreview'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import MasonryLayout from 'Common/MasonryLayout'

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
      withNavSpace
      as="section"
    >
      <Type as="h1" size="displayLarge" className={styles.Title}>
        Gallery
      </Type>
      <MasonryLayout
        items={galleryNodes.map(item => (
          <GalleryPreview
            className={styles.GalleryPreview}
            key={item.id}
            media={item.media}
            surround
            isZoomable
          />
        ))}
        gap={25}
      />
    </Container>
  )
}

GallerySection.propTypes = {
  galleryNodes: array
}

export default GallerySection
