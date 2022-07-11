
import { number, string, oneOfType, object } from 'prop-types'
import { useNextSanityImage } from 'next-sanity-image'
import classNames from 'classnames'
import NextImage from 'next/image'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import ResponsiveMedia from '../ResponsiveMedia/index'

import styles from './Image.module.scss'
import client from '@/services/sanity/sanity'



const imgUrlBuilder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
})

const SanityImage = ({ image, alt, ...other }) => {
  const imageProps = useNextSanityImage(client, image)
  return <NextImage {...imageProps} alt={alt} {...other} />
}

const StaticImage = ({ image, alt, ...other }) => {
  return <NextImage src={image} alt={alt} {...other} />
}

type ImageProps = {
  image?: string
  alt: string
  src?: string
  ratio?: number
  width?: number
  height?: number
  className?: string
}

/**
 * Component to handle all types images with ratio support
 */
const Image = ({ image, ratio, alt, className, width, height, src, ...other }: ImageProps) => {
  if (!image && !src) return null
  let imageEl

  if (src) {
    if(typeof src == 'object') {
      src = imgUrlBuilder
      .image(src)
      .width(width ? width : 1920)
      .height(height ? height : 1080)
    }
      
    imageEl = <img src={src} alt={alt} width={width ? width : null} height={height ? height : null} {...other} loading="lazy" />
  } else if (typeof image === 'string') {
    imageEl = <StaticImage image={image} alt={alt} {...other} />
  } else if (image.asset) {
    imageEl = <SanityImage image={image} alt={alt} {...other} />
  } else {
    imageEl = <StaticImage image={image} alt={alt} {...other} />
  }

  if (ratio) {
    return (
      <ResponsiveMedia
        className={classNames(styles.Image, className)}
        ratio={ratio}
      >
        {imageEl}
      </ResponsiveMedia>
    )
  }

  return <div className={classNames(styles.Image, className)}>{imageEl}</div>
}

Image.propTypes = {
  image: oneOfType([string, object]),
  ratio: number,
  width: number,
  height: number,
  alt: string,
  src: oneOfType([string, object])
}

export default React.memo(Image)