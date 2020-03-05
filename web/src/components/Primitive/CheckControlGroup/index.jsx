import React from 'react'
import { node, string } from 'prop-types'

import styles from './CheckControlGroup.module.scss'

const CheckControlGroup = ({ a11yLabel, children }) => (
  <div className={styles.CheckControlGroup} role="group" aria-label={a11yLabel}>
    {children}
  </div>
)

CheckControlGroup.propTypes = {
  a11yLabel: string.isRequired,
  children: node.isRequired
}

export default CheckControlGroup
