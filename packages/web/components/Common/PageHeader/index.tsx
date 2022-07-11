import React from 'react'

export type PageHeaderProps = {
  title: string
  subtitle: string
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-8 px-4 lg:p-12 lg:py-16 bg-tertiary rounded-lg shadow">
      <div className="container-lg space-y-6 md:space-y-8 text-primary">
        <p className="ml-1 pb-28">
          <strong>EOB</strong> - {title}
        </p>
        <h2 className="heading-xlarge">{title}</h2>
        <p className="font-bold max-w-2xl text-sm md:text-xl subtitle pt-16">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PageHeader
