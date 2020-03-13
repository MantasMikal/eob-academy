import React from 'react'
import { cn } from 'lib/helpers'
import { string, object } from 'prop-types'
import Image from 'gatsby-image'
import { useDarkContext } from 'Context/DarkContext'

import Type from 'Primitive/Type'

import styles from './GalleryPreview.module.scss'

const GalleryPreview = ({ media, caption, alt }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Root, isDark && styles.isDark)}>
      <div className={styles.Media}>
        {media && <Image fluid={media} alt={alt || 'Gallery image'} />}
      </div>
      {caption && (
        <Type size="base" className={styles.Caption}>
          {caption}
        </Type>
      )}
    </div>
  )
}

GalleryPreview.propTypes = {
  media: object,
  caption: string,
  alt: string
}

export default GalleryPreview
