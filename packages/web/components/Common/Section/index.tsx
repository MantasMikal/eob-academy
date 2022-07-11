import React from 'react'
import classNames from 'classnames'
import SectionTitle from '../SectionTitle'

export type SectionProps = {
  title: string
  label?: string
  href?: string
  className?: string
  children: React.ReactNode
}

function Section({ title, label, href, className, children }: SectionProps) {
  return (
    <section
      className={classNames(
        'container-lg pb-14 space-y-8 md:space-y-14',
        className
      )}
    >
      <SectionTitle title={title} label={label && label} href={href && href} />
      {children}
    </section>
  )
}

export default Section
