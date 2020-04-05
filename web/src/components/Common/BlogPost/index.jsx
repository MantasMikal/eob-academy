import React from 'react'
import { formatDate, cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'
import Image from 'gatsby-image'

import BlockContent from '../../block-content'
import Container from 'Primitive/Container'
import BlockText from 'Primitive/BlockText/BlockText'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import Type from 'Primitive/Type'
import Badge from 'Common/Badge'
import Icon from 'Primitive/Icon'
import SocialShare from '../SocialShare'

import styles from './BlogPost.module.scss'
import SocialBlock from '../SocialShare/SocialBlock'

const BlogPost = (props) => {
  const {
    _rawBody,
    authors,
    categories,
    readTime,
    title,
    mainImage,
    publishedAt,
    _rawHighlightedText,
    category,
    url,
  } = props
  const isDark = useDarkContext()
  console.log(url)
  return (
    <article className={cn(styles.Root, isDark && styles.isDark)}>
      {mainImage && mainImage.asset && (
        <ResponsiveMedia ratio={9 / 16}>
          <Image fluid={mainImage.asset.fluid} alt={mainImage.alt} />
        </ResponsiveMedia>
      )}
      <Container className={styles.Container} size="medium" gutter center>
        <div className={styles.Content}>
          {title && (
            <div className={styles.TitleWrapper}>
              <Type as="h1" size="displayLarge" className={styles.Title}>
                {title}
              </Type>
              <div className={styles.DateWrapper}>
                {publishedAt && (
                  <Type as="time" size="small" className={styles.Date}>
                    {formatDate(publishedAt)}
                  </Type>
                )}
                {readTime && (
                  <Type size="small" as="span" className={styles.ReadTime}>
                    {'•'}
                    {readTime} min read
                  </Type>
                )}
              </div>
              <div className={styles.CategoryWrapper}>
                {category &&
                  category.length > 0 &&
                  category.map((cat) => <Badge content={cat.title} color={cat.color.hex} />)}
              </div>
            </div>
          )}
          {_rawHighlightedText && (
            <div className={styles.HighlightedText}>
              <BlockText blocks={_rawHighlightedText} />
            </div>
          )}
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </div>
        <div className={styles.SocialShare}>
          <SocialBlock url={url} />
        </div>
      </Container>
    </article>
  )
}

BlogPost.propTypes = {}

export default BlogPost

{
  /* <aside className={styles.metaContent}>
             {publishedAt && (
                <div className={styles.publishedAt}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do YYYY')}
                </div>
              )}
            {authors && <RoleList items={authors} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )} 
          </aside> */
}
