import React from 'react'
import { node, number } from 'prop-types'

import styles from './ResponsiveMedia.module.scss'
import { cn } from 'lib/helpers'

const formatRatio = ratio => {
  return parseFloat((ratio * 100).toFixed(4))
}

const ResponsiveMedia = ({ children, className, ratio }) => (
  <div
    className={cn(styles.ResponsiveMedia, className)}
    style={{ paddingBottom: `${formatRatio(ratio)}%` }}
  >
    {children}
  </div>
)

ResponsiveMedia.propTypes = {
  children: node.isRequired,
  ratio: number.isRequired
}

export default ResponsiveMedia
