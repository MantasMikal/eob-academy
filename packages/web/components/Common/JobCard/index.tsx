import SmartLink from '@/components/Primitive/SmartLink'
import { UseNextSanityImageProps } from 'next-sanity-image'
import React from 'react'
import SanityImage from '../SanityImage'

export interface IJobCardProps {
  title: string
  slug: {
    current: string
  }
  mainImage: UseNextSanityImageProps
  excerpt?: string
}

const JobCard = ({ title, slug, mainImage, excerpt }: IJobCardProps) => {
  return (
    <SmartLink
      to={`/careers/${slug.current}`}
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
      </div>
    </SmartLink>
  )
}

export default JobCard
