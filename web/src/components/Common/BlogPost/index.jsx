import React from 'react'
import BlockContent from '../../block-content'
import { formatDate } from 'lib/helpers'
import Container from 'Primitive/Container'
// import RoleList from './role-list'
import BlockText from 'Primitive/BlockText/BlockText'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import Type from 'Primitive/Type'
import Image from 'gatsby-image'


import styles from './BlogPost.module.scss'

const BlogPost = props => {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
    _rawHighlightedText
  } = props
  return (
    <article className={styles.Root}>
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
                {' • '}
                <Type as="span" size="small">
                  4 min read
                </Type>
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
