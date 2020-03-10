import { Link } from 'gatsby'
import React from 'react'
import { getBlogUrl, formatDate } from '../../../lib/helpers'
import BlockText from '../../block-text'
import Image from 'gatsby-image'
import Type from 'Primitive/Type'

import styles from './BlogPostPreview.module.scss'

function BlogPostPreview(props) {
  return (
    <div className={styles.Root}>
      <div className={styles.LeadMediaThumb}>
        {props.mainImage && props.mainImage.asset && <Image fluid={props.mainImage.asset.fluid} />}
      </div>
      <Link className={styles.Wrapper} to={getBlogUrl(props.slug.current)}>
        <Type as="h3" size="title" className={styles.Title}>
          {props.title}
        </Type>
        {props._rawExcerpt && (
          <div className={styles.Excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
        <Type size="small" as="p" italic>
          {formatDate(props.publishedAt)}
        </Type>
      </Link>
    </div>
  )
}

export default BlogPostPreview
