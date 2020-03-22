import React from 'react'
import { array } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import BlogPreviewLayout from 'Common/BlogPreviewLayout'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './BlogSection.module.scss'

const BlogSection = ({ blogNodes }) => {
  const isDark = useDarkContext()
  return (
    <Container
      className={cn(styles.BlogSection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
    >
      <Type as="h2" size="displayLarge" className={styles.Title}>
        Blog
      </Type>
      <BlogPreviewLayout nodes={blogNodes} surround />
    </Container>
  )
}

BlogSection.propTypes = {
  galleryNodes: array
}

export default BlogSection
