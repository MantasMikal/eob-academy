import React from 'react'
import { node, string } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import styles from './Qoute.module.scss'

const Qoute = ({ children, className, ...rest }) => {
  const isDark = useDarkContext()
  return (
    <blockquote
      className={cn(styles.baseLarge, styles.qoute, styles.common, isDark && styles.isDark, className)}
      {...rest}
    >
      {children}
    </blockquote>
  )
}

Qoute.displayName = 'Qoute'

Qoute.propQoutes = {
  children: node.isRequired,
  className: string
}

export default Qoute
