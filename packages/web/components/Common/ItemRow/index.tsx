import React from 'react'
import Icon from '@/components/Primitive/Icon'
import classNames from 'classnames'

export type ItemRowProps = {
  items: any
  cardClassName?: string
  iconClassName?: string
  className?: string
}

function ItemRow({
  items,
  cardClassName,
  iconClassName,
  className
}: ItemRowProps) {
  return (
    <section
      className={classNames(
        `container-lg grid sm:grid-cols-2 lg:grid-cols-${items.length} gap-4 lg:gap-6 gap-y-12`,
        className
      )}
    >
      {items.map((item: any, i: number) => (
        <div
          className={classNames(
            'flex flex-col p-6 lg:px-3 lg:py-6 bg-white rounded-lg shadow space-y-4 flex-auto',
            cardClassName
          )}
          key={`About:${i}`}
        >
          <Icon
            type={item.icon}
            width={100}
            height={100}
            a11yText={item.a11yText}
            className={(classNames('mx-auto'), iconClassName)}
          />
          <h3 className="font-bold text-primary">{item.title}</h3>
          <p>{item.subtitle && item.subtitle}</p>
        </div>
      ))}
    </section>
  )
}

export default ItemRow
