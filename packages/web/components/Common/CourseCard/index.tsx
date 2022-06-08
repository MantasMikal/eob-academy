import OverlayLink from '@/components/Primitive/OverlayLink'
import SmartLink from '@/components/Primitive/SmartLink'
import { ArrowRightIcon } from '@heroicons/react/outline'
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
    <div className="group relative flex flex-col items-start sm:flex-row sm:space-x-3 lg:space-x-6 bg-white rounded-lg shadow hover:shadow-md active:shadow-sm active:scale-[0.993] trns-ease child:trns-ease">
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
          <h3 className="text-lg font-bold sm:text-2xl lg:text-3xl group-hover:text-secondary ">
            {title}
          </h3>
        </OverlayLink>
        <p className="sm:max-w-lg group-hover:text-secondary">{description}</p>
        <SmartLink
          className="relative block text-lg font-bold z-10 hover:underline "
          href={category.href}
        >
          {category.title}
        </SmartLink>
        <ArrowRightIcon className="absolute hidden lg:block text-secondary right-6 top-2 w-8 h-8 cursor-pointer group-hover:translate-x-2 trns-ease" />
      </div>
    </div>
  )
}

export default CourseCard
