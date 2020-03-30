import React from 'react'
import  { string } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'

import styles from './DescriptionCard.module.scss'

// TODO
// Replace Icon with image if using CMS

const DescriptionCard = ({ icon, title, description }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.DescriptionCard, isDark && styles.isDark)}>
      <Icon className={styles.Icon} type={icon} height={165} a11yText={`Icon of ${icon}`} />
      <Type className={styles.Title} size="title">
        {title}
      </Type>
      <Type className={styles.Description} size="base">
        {description}
      </Type>
    </div>
  )
}

DescriptionCard.propTypes = {
  icon: string,
  title: string,
  description: string
}

export default DescriptionCard
