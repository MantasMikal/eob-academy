import React from 'react'
import Zoom from 'react-medium-image-zoom'
import { useDarkContext } from 'Context/DarkContext'

import Media from 'Common/Media'

import styles from './ZoomableMedia.module.scss'
import 'react-medium-image-zoom/dist/styles.css'

const imageStyles = {
  width: '100%'
}

// Can't be used with ResponsiveMedia

const ZoomableMedia = ({ media, children }) => {
  const isDark = useDarkContext()
  const component = children ? (
    children
  ) : (
    <Media imgWrapperStyle={imageStyles} imgStyle={imageStyles} media={media} />
  )
  return (
    <Zoom
      className={styles.ZoomableMedia}
      transitionDuration={200}
      overlayBgColorEnd={isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
      overlayBgColorStart="rgba(0, 0, 0, 0)"
      zoomMargin={20}
    >
      {component}
    </Zoom>
  )
}

ZoomableMedia.propTypes = {}

export default ZoomableMedia
