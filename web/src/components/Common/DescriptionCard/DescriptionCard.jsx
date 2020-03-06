import React from 'react'
import PropTypes from 'prop-types'

import styles from './DescriptionCard.module.scss'
import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

const DescriptionCard = ({ icon, title, description }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.DescriptionCard, isDark && styles.isDark)}>
      <Icon className={styles.Icon} type={icon} height={165} />
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
