import React from 'react'
import { bool, number } from 'prop-types'
import classNames from 'classnames'

import styles from './Spinner.module.scss'

const Spinner = ({ paused, revealDelay, size }) => (
  <div
    className={classNames(styles.Spinner, paused && styles.paused)}
    style={{
      animationDelay: revealDelay && `${revealDelay}ms`,
      ...(size && {
        height: size,
        width: size
      })
    }}
  >
    <div className={classNames(styles.SpinnerInner)}>
      <svg viewBox="0 0 21 21">
        <circle cx="10.5" cy="1.5" r="1.5" />
        <circle cx="4.1" cy="4.1" r="1.5" />
        <circle cx="1.5" cy="10.5" r="1.5" />
        <circle cx="4.1" cy="16.9" r="1.5" />
        <circle cx="10.5" cy="19.5" r="1.5" />
        <circle cx="16.9" cy="16.9" r="1.5" />
        <circle cx="19.5" cy="10.5" r="1.5" />
        <circle cx="16.9" cy="4.1" r="1.5" />
      </svg>
    </div>
  </div>
)

Spinner.propTypes = {
  paused: bool,
  revealDelay: number,
  size: number
}

export default Spinner
