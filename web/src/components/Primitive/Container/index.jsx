import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import Element from '../Element'

import styles from './Container.module.scss'

export const sizes = ['small', 'medium', 'large', 'wide']

const Container = ({
  as,
  center,
  children,
  className,
  gutter,
  noClearfix,
  size,
  fullHeight
}) => (
  <Element
    as={as}
    className={classNames(
      styles.Container,
      center && styles.center,
      gutter && styles.gutter,
      noClearfix && styles.noClearfix,
      size && styles[size],
      fullHeight && styles.fullHeight,
      className
    )}
  >
    {children}
  </Element>
)

Container.propTypes = {
  as: string,
  center: bool,
  children: node.isRequired,
  className: string,
  gutter: bool,
  noClearfix: bool,
  fullHeight: bool,
  size: oneOf(sizes)
}

export default Container
