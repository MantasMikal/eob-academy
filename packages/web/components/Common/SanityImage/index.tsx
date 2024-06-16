import { client } from '@/services/sanity/sanity'
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import { ImageProps } from 'next/image'
import NextImage from 'next/image'
import React from 'react'

export interface ISanityImage extends ImageProps {
  src: UseNextSanityImageProps
  alt?: string
}

const SanityImage = ({ src, alt, ...other }: ISanityImage) => {
  const imageProps = useNextSanityImage(client, src || {})
  return <NextImage {...imageProps} alt={alt} {...other} />
}

export default SanityImage
