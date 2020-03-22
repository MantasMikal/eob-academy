import React from 'react'
import { cn } from 'lib/helpers'
import { object, bool, number, string } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'

import Type from 'Primitive/Type'
import Media from 'Common/Media'
import Zoomable from 'Common/Zoomable'

import styles from './GalleryPreview.module.scss'

const GalleryPreview = ({ media, ratio, surround, isZoomable, className }) => {
  const isDark = useDarkContext()

  const el = isZoomable ? (
    <Zoomable atio={ratio ? ratio : undefined} media={media} />
  ) : (
    <Media ratio={ratio ? ratio : undefined} media={media} />
  )

  return (
    <div className={cn(styles.Root, isDark && styles.isDark, surround && styles.surround, className)}>
      {el}
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
  surround: bool,
  className: string
}

export default GalleryPreview
