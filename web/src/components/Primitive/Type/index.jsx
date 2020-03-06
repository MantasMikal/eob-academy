import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Type.module.scss'

import Element from '../Element'

export const sizes = [
  'display2',
  'display1',
  'title2',
  'menu',
  'title',
  'title1',
  'subtitle',
  'base',
  'small'
]

const Type = ({ children, className, as, size, tight }) => (
  <Element
    as={as}
    className={classNames(styles.Type, size && styles[size], tight && styles.tight, className)}
  >
    {children}
  </Element>
)

Type.displayName = 'Type'

Type.defaultProps = {
  as: 'div',
  size: 'base'
}

Type.propTypes = {
  children: node.isRequired,
  className: string,
  as: string,
  size: oneOf(sizes),
  tight: bool
}

export default Type
