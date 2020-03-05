import React from 'react'
import { node } from 'prop-types'

import styles from './A11yNavigation.module.scss'

const A11yNavigation = ({ children }) => (
  <div className={styles.A11yNavigation}>{children}</div>
)

A11yNavigation.propTypes = {
  children: node.isRequired
}

export default A11yNavigation
