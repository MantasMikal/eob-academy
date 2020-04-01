import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import ZoomableMedia from 'Common/Zoomable'

import styles from './figure.module.css'

function Figure(props) {
  return (
    <figure className={styles.root}>
      <ZoomableMedia>
        {props.asset && (
          <img
            src={imageUrlFor(buildImageObj(props))
              .width(1200)
              .url()}
            alt={props.alt}
          />
        )}
        <figcaption className={styles.caption}>{props.caption}</figcaption>
      </ZoomableMedia>
    </figure>
  )
}

export default Figure
