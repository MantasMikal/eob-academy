import React from 'react'
import { string, object, array } from 'prop-types'
import Carousel from 'nuka-carousel'
import useMedia from 'lib/use-media'

import BlogPostPreview from 'Common/BlogPostPreview/BlogPostPreview'
import ButtonBase from 'Primitive/ButtonBase'
import Icon from 'Primitive/Icon'

import styles from './BlogPostCarousel.module.scss'
import { arrayOf, shape } from 'prop-types'

function BlogPostCarousel(props) {
  const isTablet = useMedia('(max-width: 960px)')
  const isPhone = useMedia('(max-width: 600px)')
  const slidesToShow = isTablet ? (isPhone ? 1 : 2) : 3

  return (
    <div className={styles.Root}>
      <Carousel
        slidesToShow={slidesToShow}
        cellSpacing={24}
        enableKeyboardControls
        frameOverflow="visible"
        initialSlideHeight={400}
        speed={250}
        transitionMode="scroll"
        renderBottomRightControls={({ nextSlide }) => (
          <ButtonBase className={styles.ControlRight} onClick={nextSlide}>
            <Icon
              className={styles.ControlIcon}
              type="long-arrow-right"
              width={50}
              height={20}
              a11yText="Next slide"
            />
          </ButtonBase>
        )}
        renderBottomLeftControls={({ previousSlide }) => (
          <ButtonBase className={styles.ControlLeft} onClick={previousSlide}>
            <Icon
              className={styles.ControlIcon}
              type="long-arrow-left"
              width={50}
              height={20}
              a11yText="Previous Slide"
            />
          </ButtonBase>
        )}
        // Removes default controls
        renderBottomCenterControls={() => null}
        renderCenterRightControls={() => null}
        renderCenterLeftControls={() => null}
      >
        {props.nodes &&
          props.nodes.map(node => (
            <BlogPostPreview
              key={node.id}
              slug={node.slug}
              mainImage={node.mainImage.asset.fluid}
              title={node.title}
              publishedAt={node.publishedAt}
              excerpt={node._rawExcerpt}
            />
          ))}
      </Carousel>
    </div>
  )
}

BlogPostCarousel.defaultProps = {
  nodes: []
}

BlogPostCarousel.propTypes = {
  nodes: arrayOf(
    shape({
      slug: object,
      mainImage: object,
      title: string,
      publishedAt: string,
      excerpt: array
    })
  )
}

export default BlogPostCarousel
