import React from 'react'
import classNames from 'classnames'
import SectionTitle from '../SectionTitle'

export type SectionProps = {
  title: string
  diffBg?: boolean
  label?: string
  href?: string
  className?: string
  children: React.ReactNode
}

function Section({ title, label, href, diffBg = false, className, children }: SectionProps) {
  return (
    <div className={classNames("w-screen", diffBg && 'bg-backgroundSecondary')}>
      <section
        className={classNames(
          'container-lg pb-8 md:pb-16 space-y-8 md:space-y-16',
          className
        )}
      >
        <SectionTitle title={title} label={label && label} href={href && href} />
        {children}
      </section>

    </div>
  )
}

export default Section
