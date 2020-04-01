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
  return (
    <ShrinkWrap as="li" className={cn(styles.ListItem, isDark && styles.isDark)} vAlign="middle">
      <ShrinkWrap.Item shirnk className={styles.IconWrapper}>
        <Icon className={styles.Icon} type={icon} height={25} width={22} a11yText={icon} />
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        <Type className={styles.Title} as="p" size="base" demi>
          {title}:
        </Type>
        <Type className={styles.Value} as="p" size="base">
          {value}
        </Type>
      </ShrinkWrap.Item>
    </ShrinkWrap>
  )
}

ListItem.propTypes = {
  icon: string,
  title: string,
  value: string
}

export default ListItem
