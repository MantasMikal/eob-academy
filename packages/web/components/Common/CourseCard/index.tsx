import OverlayLink from '@/components/Primitive/OverlayLink'
import SmartLink from '@/components/Primitive/SmartLink'
import {
  ArrowRightIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/outline'
import { UseNextSanityImageProps } from 'next-sanity-image'
import React from 'react'
import SanityImage from '../SanityImage'

export type CourseCategory = {
  title: string
  slug: {
    current: string
  }
}

export type CourseCardProps = {
  slug: {
    current: string
  }
  mainImage: UseNextSanityImageProps
  title: string
  subtitle: string
  category: CourseCategory
  launchDate: string
  ages: string
}

function CourseCard({
  slug,
  mainImage,
  title,
  subtitle,
  launchDate,
  category,
  ages
}: CourseCardProps) {
  return (
    <div className="group relative flex flex-col items-start sm:flex-row sm:space-x-3 lg:space-x-6 bg-white rounded-lg shadow hover:shadow-md active:shadow-sm active:scale-[0.993] trns-ease child:trns-ease">
      <div className="relative flex-auto aspect-video w-full sm:max-w-sm sm:min-w-[250px] sm:m-3">
        <SanityImage
          src={mainImage}
          alt={title}
          className="rounded-t-lg sm:rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex flex-col space-y-1 p-3 sm:space-y-3 z-10">
        <div className="flex self-start border divide-x -mt-6 bg-white shadow-sm rounded-lg p-2">
          <div className="flex items-center flex-shrink-0 px-2 space-x-1">
            <CalendarIcon className="h-6 w-6 text-secondary" />
            <div className="text-sm">{launchDate}</div>
          </div>
          <div className="flex items-center flex-shrink-0 px-2 space-x-1">
            <UserIcon className="h-6 w-6 text-secondary" />
            <div className="text-sm">{ages}</div>
          </div>
        </div>
        <OverlayLink to={`courses/${slug}`} className="">
          <h3 className="text-2xl font-bold sm:text-2xl lg:text-3xl group-hover:text-secondary ">
            {title}
          </h3>
        </OverlayLink>
        <p className="sm:max-w-prose group-hover:text-secondary line-clamp-4">
          {subtitle}
        </p>
        <SmartLink
          className="relative block text-lg font-bold z-10 hover:underline"
          href={`/courses/category/${category?.slug?.current}`}
        >
          {category?.title}
        </SmartLink>
        <ArrowRightIcon className="absolute hidden lg:block text-secondary right-6 top-2 w-8 h-8 cursor-pointer group-hover:translate-x-2 trns-ease" />
      </div>
    </div>
  )
}

export default CourseCard
