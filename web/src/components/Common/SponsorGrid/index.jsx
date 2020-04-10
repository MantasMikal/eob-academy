import React from 'react'
import { arrayOf, shape, object, string } from 'prop-types'
import GatsbyImage from 'gatsby-image'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import SmartLink from 'Primitive/SmartLink'
import Type from 'Primitive/Type'

import styles from './SponsorGrid.module.scss'

const Sponsor = ({ sponsor }) => {
  return (
    <SmartLink href={sponsor.url} className={styles.ImageWrapper} target='_blank'>
      <GatsbyImage
        className={styles.SponsorImage}
        fluid={sponsor.image.asset.fluid}
        alt={sponsor.image.alt}
      />
    </SmartLink>
  )
}

const SponsorGrid = ({ sponsors, className }) => {
  const isDark = useDarkContext()
  if (!sponsors) return <> </>
  return (
    <div className={cn(isDark && styles.isDark, className)}>
      <Type size='title' className={styles.Title}>
        Partners
      </Type>
      <div className={cn(styles.Wrapper, styles.large)}>
        {sponsors.map((sponsor, i) => {
          return (
            sponsor.isFeatured && (
              <Sponsor isLarge sponsor={sponsor} key={`${sponsor._key}-${i}-featured`} />
            )
          )
        })}
      </div>
      <Type size='title' className={styles.Title}>
        Supporters
      </Type>
      <div className={styles.Wrapper}>
        {sponsors.map((sponsor, i) => {
          return !sponsor.isFeatured && <Sponsor sponsor={sponsor} key={`${sponsor._key}-${i}`} />
        })}
      </div>
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
