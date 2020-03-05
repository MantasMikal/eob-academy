import React from 'react'
import { node, string } from 'prop-types'

import styles from './NavigationWrapper.module.scss'

const NavigationWrapper = ({ children, id }) => (
  <nav id={id} className={styles.NavigationWrapper}>
    <ul className={styles.NavigationList}>{children}</ul>
  </nav>
)

NavigationWrapper.propTypes = {
  children: node.isRequired,
  id: string.isRequired
}

export default NavigationWrapper
