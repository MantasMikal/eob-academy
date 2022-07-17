import cn from 'classnames'
import { format } from 'date-fns'
import React from 'react'

export type PageHeaderProps = {
  title: string
  subtitle: string
  className?: string
  contentClassName?: string
  date?: string
}

function PageHeader({
  title,
  subtitle,
  date,
  className,
  contentClassName
}: PageHeaderProps) {
  return (
    <section
      className={cn('py-8 lg:py-16 bg-tertiary rounded-lg shadow', className)}
    >
      <div
        className={cn(
          'container-lg space-y-6 md:space-y-8 text-secondary',
          contentClassName
        )}
      >
        <p className="ml-1 pb-28">
          <strong>EOB</strong> - {title}
        </p>
        <div className="flex align-start justify-between space-x-4">
          <h2 className="heading-xlarge">{title}</h2>
          {date && (
            <time className="whitespace-nowrap font-semibold">
              {format(new Date(date), 'MMM dd, yyyy')}
            </time>
          )}
        </div>
        {subtitle && (
          <p className="font-bold max-w-2xl text-sm md:text-xl subtitle pt-16">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHeader
