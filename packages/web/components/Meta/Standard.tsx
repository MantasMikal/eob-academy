import { NextSeo } from 'next-seo'
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import client from '@/services/sanity/sanity'

const { url } = {
  url: 'https://www.eobacademy.com'
}

export type StandardMetaProps = {
  title: string
  description?: string
  canonical?: string
  image?: UseNextSanityImageProps
}

const StandardMeta: React.FC<StandardMetaProps> = ({
  title,
  description,
  canonical,
  image
}) => {
  const canonicalUrl = `${url}${canonical}`
  const ogImage = useNextSanityImage(client, image || {})
  const config = {
    title: title,
    ...(description && { description }),
    ...(canonical && { canonical: canonicalUrl }),
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      images: ogImage && [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
          alt: 'EOB Academy'
        }
      ]
    }
  }
  return <NextSeo {...config} />
}

export default StandardMeta
