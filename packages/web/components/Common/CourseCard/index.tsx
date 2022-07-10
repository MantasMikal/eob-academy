import OverlayLink from '@/components/Primitive/OverlayLink'
import SmartLink from '@/components/Primitive/SmartLink'
import {
  ArrowRightIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/outline'
import format from 'date-fns/format'
import Image, { ImageProps } from 'next/image'
import React from 'react'

export type CourseCategory = {
  title: string
  href: string
}

export type CourseCardProps = {
  href: string
  image: ImageProps
  title: string
  description: string
  category: CourseCategory
  startDate: string
  ageGroup: string
}

function CourseCard({
  href,
  image,
  title,
  description,
  startDate,
  category,
  ageGroup
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
      <div className="flex flex-col space-y-1 p-3 sm:space-y-3 z-10">
        <div className="flex self-start border divide-x -mt-6 bg-white shadow-sm rounded-lg p-2">
          <div className="flex items-center flex-shrink-0 px-2 space-x-1">
            <CalendarIcon className="h-6 w-6 text-secondary" />
            <div className="text-sm">
              {format(new Date(startDate), 'MMM dd, yyyy')}
            </div>
          </div>
          <div className="flex items-center flex-shrink-0 px-2 space-x-1">
            <UserIcon className="h-6 w-6 text-secondary" />
            <div className="text-sm">{ageGroup}</div>
          </div>
        </div>
        <OverlayLink to={href} className="">
          <h3 className="text-2xl font-bold sm:text-2xl lg:text-3xl group-hover:text-secondary ">
            {title}
          </h3>
        </OverlayLink>
        <p className="sm:max-w-prose group-hover:text-secondary line-clamp-4">
          {description}
        </p>
        <SmartLink
          className="relative block text-lg font-bold z-10 hover:underline"
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
