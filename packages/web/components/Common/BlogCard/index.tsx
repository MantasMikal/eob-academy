import SmartLink from '@/components/Primitive/SmartLink'
import { format } from 'date-fns'
import Image from 'next/future/image'
import React from 'react'

export interface IBlogCardProps {
  title: string
  href: string
  image: string
  publishedAt: string
  tag?: string
  description?: string
}

const BlogCard = ({
  title,
  href,
  image,
  publishedAt,
  tag,
  description
}: IBlogCardProps) => {
  return (
    <SmartLink to={href} className="block space-y-2 bg-white rounded border shadow hover:shadow-md hover:scale-101 active:scale-98 transition-all">
      <Image
        className="rounded aspect-video object-cover"
        src={image}
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
