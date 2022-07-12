import { client } from '@/services/sanity/sanity'
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import { ImageProps } from 'next/future/image'
import NextImage from 'next/future/image'
import React from 'react'

export interface ISanityImage extends ImageProps {
  src: UseNextSanityImageProps
  alt?: string
}

const SanityImage: React.FC<ISanityImage> = ({ src, alt, ...other }) => {
  const imageProps = useNextSanityImage(client, src || {})
  console.log('🚀 ~ file: index.tsx ~ line 14 ~ imageProps', imageProps)
  return <NextImage {...imageProps} alt={alt} {...other} />
}

export default SanityImage
