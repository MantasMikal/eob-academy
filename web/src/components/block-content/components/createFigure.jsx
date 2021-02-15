import React from 'react'
import cfg from '../../../../config'

import ZoomableImage from 'Common/Zoomable'
import Media from 'Common/Media'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

const createFigure = figure => {
  if (!figure || !figure.asset || !figure.asset.mimeType) return null
  const { isZoomable, asset, alt, maxWidth } = figure
  
  if (asset.mimeType === 'image/gif') {
    return <img src={asset.url} alt={alt || ' '} style={{ width: '100%' }} key={figure.asset.id} />
  } else {
    const mediaProps = getFluidGatsbyImage(
      asset._id,
      { maxWidth: maxWidth || 800 },
      cfg.project
    )
    const media = {
      asset: {
        fluid: mediaProps
      },
      alt: alt || ' '
    }

    const El = isZoomable === undefined || isZoomable ? ZoomableImage : Media
    return (
      <div style={{padding: '10px 0', maxWidth: maxWidth || 'auto'}}>
        <El key={figure._key} media={media} />
      </div>
    )
  }
}

export default createFigure
