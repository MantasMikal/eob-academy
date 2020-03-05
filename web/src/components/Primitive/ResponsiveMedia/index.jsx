import React from 'react'
import { node, number } from 'prop-types'

import styles from './ResponsiveMedia.module.scss'

const formatRatio = ratio => {
  return parseFloat((ratio * 100).toFixed(4))
}

const ResponsiveMedia = ({ children, ratio }) => (
  <div
    className={styles.ResponsiveMedia}
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
