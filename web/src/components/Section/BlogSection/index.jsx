import React, { useState } from 'react'
import { array } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Badge from 'Common/Badge'

import styles from './BlogSection.module.scss'
import MasonryLayout from 'Common/MasonryLayout'

Object.defineProperty(Array.prototype, 'flat', {
  value: function (depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1 ? toFlatten.flat(depth - 1) : toFlatten
      )
    }, [])
  },
})

const getAllUsedCategories = (categories = []) => {
  const merged = categories.flat()
  var unique = []
  var distinct = []
  for (let i = 0; i < merged.length; i++) {
    if (!unique[merged[i].title]) {
      distinct.push(merged[i])
      unique[merged[i].title] = 1
    }
  }
  return distinct
}

const BlogSection = ({ blogNodes }) => {
  const isDark = useDarkContext()
  const [isFirstTime, setFirstTime] = useState(true)

  // Collect all categories from posts
  const categories = []
  for (let i = 0; i < blogNodes.length; i++) {
    categories.push(blogNodes[i].category)
  }

  // Filter unique
  const usedCategores = getAllUsedCategories(categories)

  const [activeFilters, setFilters] = useState(usedCategores.map((cat) => cat.title))

  // Iterate posts and include only ones with active tag
  let blogposts = []
  for (let i = 0; i < blogNodes.length; i++) {
    let shouldInclude = false
    for (let j = 0; j < blogNodes[i].category.length; j++) {
      if (activeFilters.includes(blogNodes[i].category[j].title)) shouldInclude = true
    }

    if (shouldInclude)
      blogposts.push(
        <BlogPostPreview
          key={blogNodes[i].id}
          className={styles.BlogPostPreview}
          {...blogNodes[i]}
          surround
        />
      )
  }

  function handleFilter(filter) {
    if (isFirstTime) {
      setFilters([filter])
      setFirstTime(false)
      return
    }

    if (activeFilters.includes(filter))
      !(activeFilters.length === 1) && setFilters(activeFilters.filter((filt) => filt != filter))
    else setFilters([filter, ...activeFilters])
  }

  return (
    <Container
      className={cn(styles.BlogSection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="displayLarge" className={styles.Title}>
        Blog
      </Type>
      <div className={styles.CategoryFilterWrapper}>
        <Type as="p" size="small" className={styles.FilterLabel}>
          What would you like to read?
        </Type>
        <div className={styles.CategoryFilter}>
          {usedCategores &&
            usedCategores.length > 0 &&
            usedCategores.map((cat) => (
              <Badge
                content={cat.title}
                isInactive={!activeFilters.includes(cat.title)}
                key={`Filter-${cat.title}`}
                onClick={() => handleFilter(cat.title)}
                color={cat.color.hex}
              />
            ))}
        </div>
      </div>
      <MasonryLayout items={blogposts} gap={25} />
    </Container>
  )
}

BlogSection.propTypes = {
  galleryNodes: array,
}

export default BlogSection
