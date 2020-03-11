import React from 'react'
import { string, object, array, arrayOf, shape } from 'prop-types'
import BlogPostCarousel from 'Common/BlogPostCarousel/BlogPostCarousel'
import Container from 'Primitive/Container'
import SmartLink from 'Primitive/SmartLink'
import Type from 'Primitive/Type'
import styles from './BlogPostCarouselSection.module.scss'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

const BlogPostCarouselSection = ({ postNodes, title, browserMoreHref }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.BlogPostCarouselSection, isDark && styles.isDark)}>
      <Container size="wide" center gutter spacious>
        <Type size="displayLarge" as="h2" className={styles.Title}>
          {title}
        </Type>
        <SmartLink>
          <Type className={styles.ViewAll} size="subtitle">
            VIEW ALL
          </Type>
        </SmartLink>
        {postNodes && (
          <BlogPostCarousel
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref={browserMoreHref}
          />
        )}
      </Container>
    </div>
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
