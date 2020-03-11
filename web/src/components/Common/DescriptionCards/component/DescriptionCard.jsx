import React from 'react'
import PropTypes from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'

import styles from './DescriptionCard.module.scss'

// TODO
// Replace Icon with image if using CMS

const DescriptionCard = ({ icon, title, description }) => {
  console.log(icon, title, description)
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.DescriptionCard, isDark && styles.isDark)}>
      <Icon className={styles.Icon} type={icon} height={165} a11yText={`Icon of ${icon}`} />
      <Type className={styles.Title} size="title1">
        {title}
      </Type>
      <Type className={styles.Description} size="base">
        {description}
      </Type>
    </div>
  )
}

DescriptionCard.propTypes = {}

export default DescriptionCard
