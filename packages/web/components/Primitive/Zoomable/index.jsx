import { node } from 'prop-types'
import React from 'react'
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'

/**
 * Makes any component zoomable. Just wrap children
 */
const Zoomable = ({ children }) => {
  return (
    <div className="transition-all">
      <Zoom
        transitionDuration={200}
        overlayBgColorEnd="rgba(255, 255, 255, 0.8)"
        overlayBgColorStart="rgba(0, 0, 0, 0)"
        zoomMargin={20}
      >
        {children}
      </Zoom>
    </div>
  )
}

Zoomable.propTypes = {
  children: node.isRequired
}

export default Zoomable
