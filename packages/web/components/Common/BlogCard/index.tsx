import SmartLink from '@/components/Primitive/SmartLink'
import { format } from 'date-fns'
import { UseNextSanityImageProps } from 'next-sanity-image'
import React from 'react'
import SanityImage from '../SanityImage'

export interface IBlogCardProps {
  title: string
  slug: {
    current: string
  }
  mainImage: UseNextSanityImageProps
  publishedAt: string
  tag?: string
  description?: string
}

const BlogCard = ({
  title,
  slug,
  mainImage,
  publishedAt,
  tag,
  description
}: IBlogCardProps) => {
  return (
    <SmartLink
      to={`/blog/${slug.current}`}
      className="block space-y-2 bg-white rounded border shadow hover:shadow-md hover:scale-101 active:scale-98 transition-all"
    >
      <SanityImage
        className="rounded aspect-video object-cover"
        src={mainImage}
        alt={title}
        width={500}
        height={300}
        sizes="(max-width: 600px) 50vw, 33vw"
      />
      <div className="px-4 py-2 space-y-1">
        <div className="text-primary">
          {format(new Date(publishedAt), 'MMMM dd, yyyy')}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </SmartLink>
  )
}

export default BlogCard
