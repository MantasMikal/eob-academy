import React from 'react'
import { node } from 'prop-types'

import styles from './VisuallyHidden.module.scss'

const VisuallyHidden = ({ children }) => (
  <span className={styles.VisuallyHidden}>{children}</span>
)

VisuallyHidden.propTypes = {
  children: node.isRequired
}

export default VisuallyHidden
