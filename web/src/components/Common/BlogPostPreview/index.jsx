import React from 'react'
import { string, object, array, arrayOf } from 'prop-types'
import { Link } from 'gatsby'
import { getBlogUrl, formatDate } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import BlockText from 'Primitive/BlockText/BlockText'
import Type from 'Primitive/Type'
import Media from 'Primitive/Media'

import styles from './BlogPostPreview.module.scss'
import { cn } from 'lib/helpers'

const BlogPostPreview = ({ slug, mainImage, title, publishedAt, excerpt, ratio }) => {
  const isDark = useDarkContext()
  return (
    <Link className={cn(styles.Root, isDark && styles.isDark)} to={getBlogUrl(slug.current)}>
      <div className={styles.LeadMediaThumb}>
        <Media ratio={ratio ? ratio : undefined} media={mainImage} />
      </div>
      <Type as="h3" size="title" className={styles.Title}>
        {title}
      </Type>
      {excerpt && (
        <div className={styles.Excerpt}>
          <BlockText blocks={excerpt} />
        </div>
      )}
      <Type size="small" as="time" className={styles.Date} italic>
        {formatDate(publishedAt)}
      </Type>
    </Link>
  )
}

BlogPostPreview.propTypes = {
  slug: object,
  mainImage: object,
  title: string,
  publishedAt: string,
  excerpt: array
}

export default BlogPostPreview
