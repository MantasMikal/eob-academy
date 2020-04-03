import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const detailsQuery = graphql`
  query SEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      siteUrl
      metaImage {
        asset {
          url
          metadata {
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
`

function SEO({ description, lang, meta, keywords = [], keySentence, title, image, slug }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const metaDescription = description || data.site.description

        const metaImage = image && image.asset && image.asset.url ? image : data.site.metaImage

        const metaKeywords = keySentence
          ? keySentence
          : data.site.keywords && data.site.keywords.length
          ? data.site.keywords.join(', ')
          : null

        const canonical = slug ? `${data.site.siteUrl}${slug}` : null
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={title === data.site.title ? '%s' : `%s | ${data.site.title}`}
            link={
              canonical
                ? [
                    {
                      rel: 'canonical',
                      href: canonical
                    }
                  ]
                : []
            }
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: 'og:image',
                        content: metaImage.asset.url
                      },
                      {
                        property: 'og:image:width',
                        content: metaImage.asset.metadata.dimensions.width
                      },
                      {
                        property: 'og:image:height',
                        content: metaImage.asset.metadata.dimensions.height
                      },
                      {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                      }
                    ]
                  : [
                      {
                        name: 'twitter:card',
                        content: 'summary'
                      }
                    ]
              )
              .concat(
                metaKeywords
                  ? {
                      name: 'keywords',
                      content: metaKeywords
                    }
                  : {}
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
