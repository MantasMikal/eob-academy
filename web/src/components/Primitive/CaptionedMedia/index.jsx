import React from 'react'
import { bool, node } from 'prop-types'

import styles from './CaptionedMedia.module.scss'

const CaptionedMedia = ({ caption, children, figure }) => {
  const BodyEl = figure ? 'figure' : 'div'
  const CaptionEl = figure ? 'figcaption' : 'div'

  return (
    <div className={styles.CaptionedMedia}>
      <BodyEl className={styles.CaptionedMediaBody}>{children}</BodyEl>
      {caption && (
        <CaptionEl className={styles.CaptionedMediaCaption}>
          {caption}
        </CaptionEl>
      )}
    </div>
  )
}

CaptionedMedia.propTypes = {
  caption: node,
  children: node.isRequired,
  figure: bool
}

export default CaptionedMedia
