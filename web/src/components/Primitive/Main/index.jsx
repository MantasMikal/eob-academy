import React from 'react'
import { node } from 'prop-types'

import styles from './Main.module.scss'

const Main = ({ children }) => (
  <main id="content" role="main" className={styles.Main}>
    {children}
  </main>
)

Main.propTypes = {
  children: node.isRequired
}

export default Main
