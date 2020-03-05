import React from 'react'
import { arrayOf, bool, number, oneOfType, shape, string } from 'prop-types'
import { NextSeo } from 'next-seo'

import { config } from '../../../../meta.config'

const StandardMeta = ({ title, description, slug, customTitle, images }) => {
  const canonical = `${config.url}${slug}`

  return (
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
          images
        }
      }}
    />
  )
}

StandardMeta.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  slug: string.isRequired,
  customTitle: bool,
  images: arrayOf(
    shape({
      url: string.isRequired,
      width: oneOfType([string, number]),
      height: oneOfType([string, number]),
      alt: string
    })
  )
}

export default StandardMeta
