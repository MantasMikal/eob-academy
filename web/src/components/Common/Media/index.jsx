import React from 'react'
import { object, number } from 'prop-types'
import Image from 'gatsby-image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

const Media = ({ media, ratio, imgWrapperStyle, imgStyle }) => {
  const fixedImg = media && media.asset && media.asset.fixed ? media.asset.fixed : undefined
  const fluidImg = media && media.asset && media.asset.fluid ? media.asset.fluid : undefined
  return (fixedImg || fluidImg) && ratio ? (
    <ResponsiveMedia ratio={ratio}>
      <Image
        style={imgWrapperStyle}
        imgStyle={imgStyle}
        fixed={fixedImg}
        fluid={fluidImg}
        alt={media.alt}
      />
    </ResponsiveMedia>
  ) : (
    <Image
      style={imgWrapperStyle}
      imgStyle={imgStyle}
      fixed={fixedImg}
      fluid={fluidImg}
      alt={media.alt}
    />
  )
}

Media.propTypes = {
  media: object,
  ratio: number
}

export default Media
