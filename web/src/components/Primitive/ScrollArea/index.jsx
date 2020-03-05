import React from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './ScrollArea.module.scss'

const ScrollArea = ({ hideScrollbar, horizontal, children }) => (
  <div
    className={classNames(
      styles.ScrollArea,
      hideScrollbar && styles.hideScrollbar,
      horizontal ? styles.horizontal : styles.vertical
    )}
  >
    {children}
  </div>
)

ScrollArea.propTypes = {
  hideScrollbar: bool,
  horizontal: bool,
  children: node.isRequired
}

export default ScrollArea
