import React from 'react'
import { arrayOf, shape, object, string } from 'prop-types'
import GatsbyImage from 'gatsby-image'
import { cn } from 'lib/helpers'

import SmartLink from 'Primitive/SmartLink'

import styles from './SponsorGrid.module.scss'

const SponsorGrid = ({ sponsors, className }) => {
  return (
    <div className={cn(styles.Wrapper, className)}>
      {sponsors.map((sponsor, i) => (
        <SmartLink
          href={sponsor.url}
          className={styles.ImageWrapper}
          target="_blank"
          key={`${sponsor._key}-${i}`}
        >
          <GatsbyImage
            className={styles.SponsorImage}
            fluid={sponsor.image.asset.fluid}
            alt={sponsor.image.alt}
          />
        </SmartLink>
      ))}
    </div>
  )
}

SponsorGrid.propTypes = {
  sponsors: arrayOf(
    shape({
      url: string,
      image: shape({
        asset: object,
        alt: string
      })
    })
  )
}

export default SponsorGrid
