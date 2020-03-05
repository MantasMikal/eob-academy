import React from 'react'
import { node } from 'prop-types'

import styles from './SpacedList.module.scss'

const SpacedList = ({ children }) => (
  <div className={styles.SpacedList}>{children}</div>
)

SpacedList.propTypes = {
  children: node.isRequired
}

export default SpacedList
