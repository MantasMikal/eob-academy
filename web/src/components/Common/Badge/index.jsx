import React from 'react'
import PropTypes from 'prop-types'
import Type from 'Primitive/Type'

import styles from './Badge.module.scss'
import { cn } from 'lib/helpers'

const Bdage = ({ content, color, isInactive, ...rest }) => {
  return (
    <div
      className={cn(styles.Badge, isInactive && styles.isInactive)}
      style={{ backgroundColor: color }}
      {...rest}
    >
      <Type size="small" as="span">
        {content}
      </Type>
    </div>
  )
}

Bdage.propTypes = {}

export default Bdage
