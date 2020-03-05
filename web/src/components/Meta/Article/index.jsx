import React from 'react'
import { arrayOf, bool, number, oneOfType, shape, string } from 'prop-types'
import { NextSeo, ArticleJsonLd } from 'next-seo'

import { config } from '../../../../meta.config'

const ArticleMeta = ({
  authorName,
  customTitle,
  description,
  expirationTime,
  images,
  modifiedTime,
  publishedTime,
  publisherLogo,
  publisherName,
  section,
  slug,
  tags,
  title
}) => {
  const canonical = `${config.url}${slug}`

  return (
    <>
      <NextSeo
        config={{
          title,
          titleTemplate: customTitle && '%s',
          description,
          canonical,
          openGraph: {
            title,
            description,
            url: canonical,
            images,
            type: 'article',
            article: {
              publishedTime,
              modifiedTime,
              expirationTime,
              section,
              authors: [authorName],
              tags
            }
          }
        }}
      />

      <ArticleJsonLd
        url={canonical}
        title={title}
        description={description}
        images={images.map(image => image.url)}
        datePublished={publishedTime}
        dateModified={modifiedTime}
        authorName={authorName}
        publisherName={publisherName}
        publisherLogo={publisherLogo} // https://developers.google.com/search/docs/data-types/article#logo-guidelines
      />
    </>
  )
}

ArticleMeta.propTypes = {
  authorName: string,
  customTitle: bool,
  description: string.isRequired,
  expirationTime: string,
  images: arrayOf(
    shape({
      url: string.isRequired,
      width: oneOfType([string, number]),
      height: oneOfType([string, number]),
      alt: string
    })
  ),
  modifiedTime: string,
  publishedTime: string,
  publisherLogo: string,
  publisherName: string,
  section: string,
  slug: string.isRequired,
  tags: arrayOf(string),
  title: string.isRequired
}

export default ArticleMeta
