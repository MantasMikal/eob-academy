import React from 'react'
import { bool, string, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from '../ButtonBase'

const sizes = ['large', 'medium', 'small']

const ButtonStandard = ({ className, disabled, size, override, ...other }) => (
  <ButtonBase
    className={classNames(
      styles.ButtonStandard,
      disabled && styles.disabled,
      size && styles[size],
      override && styles.override,
      className
    )}
    {...other}
  />
)

ButtonStandard.propTypes = {
  className: string,
  disabled: bool,
  size: oneOf(sizes)
}

export default ButtonStandard
