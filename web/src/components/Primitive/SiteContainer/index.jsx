import React from 'react'
import { node } from 'prop-types'

import styles from './SiteContainer.module.scss'

const SiteContainer = ({ children }) => (
  <div className={styles.SiteContainer}>{children}</div>
)

SiteContainer.propTypes = {
  children: node.isRequired
}

export default SiteContainer
