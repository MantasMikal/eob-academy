import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf, string } from 'prop-types'

import styles from './ShrinkWrapItem.module.scss'

const ShrinkWrapItem = ({ children, noWrap, shrink, spacing, vAlign, className }) => (
  <span
    className={classNames(
      styles.ShrinkWrapItem,
      noWrap && styles.noWrap,
      shrink && styles.shrink,
      spacing && styles[spacing],
      vAlign && styles[vAlign],
      className
    )}
  >
    {children}
  </span>
)

ShrinkWrapItem.displayName = 'ShrinkWrapItem'

ShrinkWrapItem.propTypes = {
  children: node.isRequired,
  shrink: bool,
  noWrap: bool,
  spacing: oneOf(['comfortable']),
  vAlign: oneOf(['top', 'middle', 'bottom']),
  className: string
}

export default ShrinkWrapItem
