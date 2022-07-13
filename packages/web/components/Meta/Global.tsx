import { NextSeo } from 'next-seo'
import React from 'react'

const { title, fullTitle, description, themeColor, twitterHandle, url } = {
  title: 'EOB Academy',
  fullTitle: 'EOB Esports Academy - EOB Academy',
  description:
    'EOB Academy is a place where you can explore and build video games and create your own esports brand, alongside like-minded peers and incredible tutors. Sign up to start your experience... ',
  themeColor: '#fff',
  url: 'https://www.eobacademy.com',
  twitterHandle: '@EOBAcademy'
}

const GlobalMeta = () => {
  const optional: { [key: string]: string } = {
    'application-name': fullTitle,
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    'theme-color': themeColor
  }

  return (
    <NextSeo
      titleTemplate={`%s | ${title}`}
      twitter={{
        cardType: 'summary_large_image',
        site: twitterHandle
      }}
      title={fullTitle}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        url: url,
        title: fullTitle,
        description: description,
        site_name: title,
        images: [
          {
            url: '/og-image.jpg',
            width: 1200,
            height: 628,
            alt: 'EOB Academy'
          }
        ]
      }}
      additionalLinkTags={[
        ...[512, 192].map((size) => ({
          rel: 'apple-touch-icon',
          href: `/icons/icon-${size}.png`,
          type: 'image/png',
          sizes: `${size}x${size}`
        })),
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/icons/favicon.svg'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ]}
      additionalMetaTags={[
        ...Object.keys(optional).map((name) => {
          return {
            property: name,
            content: optional[name] as string
          }
        })
      ]}
    />
  )
}

GlobalMeta.propTypes = {}

export default GlobalMeta
