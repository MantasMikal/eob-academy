import React from 'react'
import Zoomable from '@/components/Primitive/Zoomable'
import SanityImage from '@/components/Common/SanityImage'

const createFigure = (figure) => {
  if (!figure || !figure.asset) return null
  const { isZoomable, asset, alt, maxWidth } = figure
  const styles = {
    width: '100%',
    height: '100%'
  }

  let imgCmp = (
    <SanityImage className="!m-0 rounded" src={figure} alt={figure.alt || ''} />
  )
  if (asset.mimeType === 'image/gif') {
    imgCmp = (
      <img className="rounded" src={asset.url} alt={alt || ''} style={styles} />
    )
  }

  return (
    <div
      key={figure._key}
      style={{
        maxWidth: maxWidth,
        marginBottom: '10px',
        ...(maxWidth && { margin: 'auto' })
      }}
    >
      {!isZoomable ? imgCmp : <Zoomable>{imgCmp}</Zoomable>}
    </div>
  )
}

export default createFigure
