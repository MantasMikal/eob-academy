import React from 'react'
import { string } from 'prop-types'

import faviconIco from '../../../asset/meta/favicon.ico'
import favicon16 from '../../../asset/meta/favicon-16.png'
import favicon32 from '../../../asset/meta/favicon-32.png'
import appleTouchIcon76 from '../../../asset/meta/apple-touch-icon-76.png'
import appleTouchIcon120 from '../../../asset/meta/apple-touch-icon-120.png'
import appleTouchIcon152 from '../../../asset/meta/apple-touch-icon-152.png'
import appleTouchIcon180 from '../../../asset/meta/apple-touch-icon-180.png'
import icon192 from '../../../asset/meta/icon-192.png'

const appleIconSizes = {
  76: appleTouchIcon76,
  120: appleTouchIcon120,
  152: appleTouchIcon152,
  180: appleTouchIcon180
}

const GlobalMeta = ({ googleSiteVerification, title, themeColor }) => {
  const optional = {
    'application-name': title,
    'theme-color': themeColor,
    'google-site-verification': googleSiteVerification
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <link rel="shortcut icon" href={faviconIco} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="icon" sizes="192x192" href={icon192} />

      {Object.keys(appleIconSizes).map(size => (
        <link
          key={`appleTouchIcon${size}`}
          rel="apple-touch-icon"
          sizes={`${size}x${size}`}
          href={appleIconSizes[size]}
        />
      ))}

      {Object.keys(optional).map(name => {
        if (!optional[name]) return
        return (
          <meta key={`Optional${name}`} name={name} content={optional[name]} />
        )
      })}
    </>
  )
}

GlobalMeta.propTypes = {
  googleSiteVerification: string,
  title: string.isRequired,
  themeColor: string.isRequired
}

export default GlobalMeta
