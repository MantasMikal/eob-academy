import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

const srcSetFormatter = srcSet => {
  return srcSet.map(image => `${image.src} ${image.width}w`).join(', ')
}

const ResponsiveImage = ({ alt, sizes, src, srcSet }) => (
  <img
    alt={alt}
    sizes={sizes && sizes.join(',')}
    srcSet={srcSet && srcSetFormatter(srcSet)}
    src={src}
  />
)

ResponsiveImage.propTypes = {
  alt: string.isRequired,
  sizes: arrayOf(string),
  src: string.isRequired,
  srcSet: arrayOf(shape({ width: number.isRequired, src: string.isRequired }))
}

export default ResponsiveImage
