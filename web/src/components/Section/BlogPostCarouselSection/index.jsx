import React from 'react'
import { string, object, array, arrayOf, shape } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Carousel from 'Common/Carousel'
import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import SmartLink from 'Primitive/SmartLink'
import Type from 'Primitive/Type'

import styles from './BlogPostCarouselSection.module.scss'

const BlogPostCarouselSection = ({ postNodes, title }) => {
  const isDark = useDarkContext()
  return (
    <section className={cn(styles.BlogPostCarouselSection, isDark && styles.isDark)}>
      <Container size="wide" center gutter spacious>
        <Type size="displayLarge" as="h2" className={styles.Title}>
          {title}
        </Type>
        <SmartLink to="/blog/" className={styles.ViewAll}>
          <Type as="span" size="subtitle">
            VIEW ALL
          </Type>
        </SmartLink>
        <Carousel>
          {postNodes &&
            postNodes.map(node => (
              <BlogPostPreview
                key={node.id}
                slug={node.slug}
                mainImage={node.mainImage}
                title={node.title}
                publishedAt={node.publishedAt}
                excerpt={node._rawExcerpt}
                readTime={node.readTime}
                surround
              />
            ))}
        </Carousel>
      </Container>
    </section>
  )
}

BlogPostCarouselSection.propTypes = {
  postNodes: arrayOf(
    shape({
      slug: object,
      mainImage: object,
      title: string,
      publishedAt: string,
      _rawExcerpt: array
    })
  )
}

export default BlogPostCarouselSection
