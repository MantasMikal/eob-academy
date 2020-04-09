import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'lib/helpers'
import styles from './Seprator.module.scss'

const Seperator = ({ className }) => {
  return (
    <div className={cn(styles.Seperator, className)}>
      {/* <img src="/asset/overlay2.svg" className={styles.OverlayStrip} /> */}
      <div className={styles.Strip} />
      {/* <img src="/asset/seperator.svg" alt="seperator" className={styles.SeperatorImg} /> */}
    </div>
  )
}

Seperator.propTypes = {}

export default Seperator
