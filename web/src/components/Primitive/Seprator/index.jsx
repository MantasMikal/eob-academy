import React from 'react'
import PropTypes from 'prop-types'

import styles from './Seprator.module.scss'

const Seperator = props => {
  return (
    <div className={styles.Seperator}>
      <img src="/asset/overlay2.svg" className={styles.OverlayStrip} />
      <img src="/asset/seperator.svg" alt="seperator" className={styles.SeperatorImg} />
    </div>
  )
}

Seperator.propTypes = {}

export default Seperator
