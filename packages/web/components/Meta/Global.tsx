import { NextSeo } from 'next-seo'
import React from 'react'

const { title, fullTitle, description, themeColor, twitterHandle, url } = {
  title: 'EOB Academy',
  fullTitle: 'Enemy Of Boredom Academy',
  description:
    'Enemy Of Boredom Academy a place of learning for young people that think differently. Creative education for the neurodiverse. ',
  themeColor: '#fff',
  url: 'https://www.eobacademy.com',
  twitterHandle: '@EOBAcademy'
}

const GlobalMeta = () => {
  const optional: { [key: string]: string } = {
    'application-name': fullTitle,
    'theme-color': themeColor,
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': fullTitle,
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
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
            url: '/og-image.png',
            width: 1200,
            height: 630,
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
          sizes: '192x192',
          href: '/icons/favicon.png'
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
