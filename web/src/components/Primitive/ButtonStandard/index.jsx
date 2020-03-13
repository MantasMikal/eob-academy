import React from 'react'
import { bool, string, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from '../ButtonBase'

const sizes = ['large', 'medium', 'small']

const ButtonStandard = ({ className, disabled, size, ...other }) => (
  <ButtonBase
    className={classNames(
      styles.ButtonStandard,
      disabled && styles.disabled,
      size && styles[size],
      className
    )}
    {...other}
  />
)

ButtonStandard.propTypes = {
  className: string,
  disabled: bool,
  size: oneOf(['large', 'medium', 'small'])
}

export default ButtonStandard
