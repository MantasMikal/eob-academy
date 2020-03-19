import React from 'react'
import { cn } from 'lib/helpers'
import { object, bool, number } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'

import Type from 'Primitive/Type'
import Media from 'Primitive/Media'

import styles from './GalleryPreview.module.scss'

const GalleryPreview = ({ media, ratio, surround }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Root, isDark && styles.isDark, surround && styles.surround)}>
      <Media ratio={ratio ? ratio : undefined} media={media} />
      {media.caption && (
        <Type size="base" className={styles.Caption}>
          {media.caption}
        </Type>
      )}
    </div>
  )
}

GalleryPreview.propTypes = {
  media: object,
  ratio: number,
  surround: bool
}

export default GalleryPreview
