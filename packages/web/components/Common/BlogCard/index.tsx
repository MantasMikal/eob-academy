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
  category?: {
    title: string
    color: {
      hex: string
    }
  }[]
  excerpt?: string
}

const BlogCard = ({
  title,
  slug,
  mainImage,
  publishedAt,
  category,
  excerpt
}: IBlogCardProps) => {
  return (
    <SmartLink
      to={`/blog/${slug.current}`}
      className="flex flex-col justify-start space-y-2 transition-all bg-white border rounded shadow hover:shadow-md hover:scale-101 active:scale-98"
    >
      <SanityImage
        className="object-cover rounded aspect-video"
        src={mainImage}
        alt={title}
        width={500}
        height={300}
        sizes="(max-width: 600px) 50vw, 33vw"
      />
      <div className="flex flex-col h-full px-4 py-2 space-y-1">
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p>{excerpt}</p>
        {publishedAt && (
          <div className="text-secondary">
            {format(new Date(publishedAt), 'MMMM dd, yyyy')}
          </div>
        )}
        <div className="!mt-auto py-2 flex flex-wrap gap-2">
          {category &&
            category?.length > 0 &&
            category.map((item: any) => (
              <span
                style={{ backgroundColor: item?.color?.hex }}
                className="text-white tag"
                key={item.title}
              >
                {item.title}
              </span>
            ))}
        </div>
      </div>
    </SmartLink>
  )
}

export default BlogCard
