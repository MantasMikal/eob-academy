import OverlayLink from '@/components/Primitive/OverlayLink'
import SmartLink from '@/components/Primitive/SmartLink'
import Image, { ImageProps } from 'next/image'
import React from 'react'

export type CourseCategory = {
  title: string
  href: string
}

type CourseCardProps = {
  href: string
  image: ImageProps
  title: string
  description: string
  category: CourseCategory
}

function CourseCard({
  href,
  image,
  title,
  description,
  category
}: CourseCardProps) {
  return (
    <div className="relative flex flex-col items-start sm:flex-row sm:space-x-3 lg:space-x-6 bg-white rounded-lg shadow hover:shadow-md active:shadow-sm active:scale-[0.993] hover:text-primary transition ease-in-out">
      <div className="relative flex-auto aspect-video w-full sm:max-w-sm sm:min-w-[250px] sm:m-3">
        <Image
          {...image}
          alt={title}
          layout="fill"
          className="rounded-t-lg sm:rounded-lg"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="space-y-1 p-3 sm:space-y-3">
        <OverlayLink to={href} className="">
          <h3 className="text-lg font-bold sm:text-2xl lg:text-3xl">{title}</h3>
        </OverlayLink>
        <p className="sm:max-w-lg">{description}</p>
        <SmartLink
          className="relative block text-lg font-semibold z-10 hover:underline"
          href={category.href}
        >
          {category.title}
        </SmartLink>
      </div>
    </div>
  )
}

export default CourseCard
