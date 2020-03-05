import React from 'react'
import classNames from 'classnames'
import { bool, node, object } from 'prop-types'

import styles from './Position.module.scss'

const Position = ({ absolute, children, fixed, relative, sticky, style }) => {
  const getPositionType = () => {
    if (absolute) return 'absolute'
    if (fixed) return 'fixed'
    if (relative) return 'relative'
    if (sticky) return 'sticky'
    return 'static'
  }

  return (
    <div
      className={classNames(styles.Position, styles[getPositionType()])}
      style={{ ...style }}
    >
      {children}
    </div>
  )
}

Position.displayName = 'Position'

Position.propTypes = {
  children: node.isRequired,
  absolute: bool,
  fixed: bool,
  relative: bool,
  sticky: bool,
  style: object
}

export default Position
