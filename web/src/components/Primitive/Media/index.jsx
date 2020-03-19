import React from 'react'
import { object, number } from 'prop-types'
import Image from 'gatsby-image'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

const Media = ({ media, ratio }) => {
  const fixedImg = media.asset.fixed ? media.asset.fixed : undefined
  const fluidImg = media.asset.fluid ? media.asset.fluid : undefined
  return ratio ? (
    <ResponsiveMedia ratio={ratio}>
      {(fixedImg || fluidImg) && <Image fixed={fixedImg} fluid={fluidImg} alt={media.alt} />}
    </ResponsiveMedia>
  ) : (
    (fixedImg || fluidImg) && <Image fixed={fixedImg} fluid={fluidImg} alt={media.alt} />
  )
}

Media.propTypes = {
  media: object,
  ratio: number
}

export default Media
