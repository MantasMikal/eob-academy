import React from 'react'
import { array } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './BlogSection.module.scss'
import MasonryLayout from 'Common/MasonryLayout'

const BlogSection = ({ blogNodes }) => {
  const isDark = useDarkContext()
  return (
    <Container
      className={cn(styles.BlogSection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as='section'
    >
      <Type as="h2" size="displayLarge" className={styles.Title}>
        Blog
      </Type>
      <MasonryLayout
        items={blogNodes.map(item => (
          <BlogPostPreview
            className={styles.BlogPostPreview}
            mainImage={item.mainImage}
            slug={item.slug}
            title={item.title}
            key={item.id}
            publishedAt={item.publishedAt}
            excerpt={item._rawExcerpt}
            surround
          />
        ))}
        gap={25}
      />
    </Container>
  )
}

BlogSection.propTypes = {
  galleryNodes: array
}

export default BlogSection
