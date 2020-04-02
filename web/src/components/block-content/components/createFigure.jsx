import React from 'react'
import cfg from '../../../../config'

import Image from 'Common/Zoomable'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

const createFigure = figure => {
  if (!figure || !figure.asset || !figure.asset.mimeType) return null

  const image = figure.asset
  const imageAlt = figure.alt ? figure.alt : ' '

  if (image.mimeType === 'image/gif') {
    return <img src={image.url} alt={imageAlt} style={{ width: '100%' }} key={figure.asset.id} />
  } else {
    const mediaProps = getFluidGatsbyImage(image._id, { maxWidth: 1000 }, cfg.project)
    const media = {
      asset: {
        fluid: mediaProps
      },
      alt: imageAlt
    }
    const isZoomable = figure.isZoomable
    return <Image key={figure._key} media={media} isZoomable={isZoomable} />
  }
}

export default createFigure
