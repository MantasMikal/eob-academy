import React from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './Prose.module.scss'

const Prose = ({ children, className, html, inverse }) => {
  if (!children && !html) return null

  return (
    <div
      className={classNames(styles.Prose, inverse && styles.inverse, className)}
      {...(html && { dangerouslySetInnerHTML: { __html: html } })}
    >
      {children}
    </div>
  )
}

Prose.propTypes = {
  children: node,
  className: string,
  html: string,
  inverse: bool
}

export default Prose
