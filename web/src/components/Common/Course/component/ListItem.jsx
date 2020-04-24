import React from 'react'
import { string } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import ShrinkWrap from 'Primitive/ShrinkWrap'
import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'

import styles from './ListItem.module.scss'

const ListItem = ({ icon, title, value }) => {
  const isDark = useDarkContext()
  const item = Array.isArray(value) ? (
    <ul className={styles.ListItemList}>
      {value.map(listItem => (
        <Type className={styles.Value} as="li" size="base">
          {listItem}
        </Type>
      ))}
    </ul>
  ) : (
    <Type className={styles.Value} as="p" size="base">
      {value}
    </Type>
  )
  return (
    <li className={cn(styles.ListItem, isDark && styles.isDark, Array.isArray(value) && styles.arrayItem)} vAlign="middle">
        <div className={styles.TitleWrap}>
          <Icon className={styles.Icon} type={icon} height={25} width={22} a11yText={icon} />
          <Type className={styles.Title} as="p" size="base">
            {title}:
          </Type>
        </div>
        <Type className={styles.Value} as="p" size="base">
          {item}
        </Type>
    </li>
  )
}

ListItem.propTypes = {
  icon: string,
  title: string,
  value: string
}

export default ListItem
