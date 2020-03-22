import React from 'react'
import { string, object, arrayOf, shape } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Carousel from 'Common/Carousel'
import GalleryPreview from 'Common/GalleryPreview'
import Container from 'Primitive/Container'
import SmartLink from 'Primitive/SmartLink'
import Type from 'Primitive/Type'

import styles from './GalleryCarouselSection.module.scss'

const GelleryCarouselSection = ({ galleryNodes, title, browserMoreHref }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.GelleryCarouselSection, isDark && styles.isDark)}>
      <Container size="wide" center gutter spacious>
        <Type size="displayLarge" as="h2" className={styles.Title}>
          {title}
        </Type>
        <SmartLink to="/gallery" className={styles.ViewAll}>
          <Type size="subtitle">VIEW ALL</Type>
        </SmartLink>
        <Carousel>
          {galleryNodes &&
            galleryNodes.map(node => (
              <GalleryPreview
                className={styles.GalleryPreview}
                key={node.id}
                media={node.media}
                ratio={9 / 16}
                surround
              />
            ))}
        </Carousel>
      </Container>
    </div>
  )
}

GelleryCarouselSection.propTypes = {
  galleryNodes: arrayOf(
    shape({
      slug: object,
      image: object,
      caption: string
    })
  )
}

export default GelleryCarouselSection
