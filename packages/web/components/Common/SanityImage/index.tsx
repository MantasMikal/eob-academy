import { client } from '@/services/sanity/sanity'
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import NextImage from 'next/image'
import React from 'react'

export interface ISanityImage {
  image: UseNextSanityImageProps
  alt?: string
}

const SanityImage = ({ image, alt, ...other }: ISanityImage) => {
  const imageProps = useNextSanityImage(client, image)
  return <NextImage {...imageProps} alt={alt} {...other} />
}

export default SanityImage
