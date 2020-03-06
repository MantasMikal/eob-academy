import React from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import ButtonBase from '../ButtonBase'

import styles from './ButtonStandard.module.scss'

const sizes = ['large', 'medium', 'small']

const ButtonStandard = ({ className, disabled, children, size, ...other }) => {
  const isDark = useDarkContext()
  return (
    <ButtonBase
      className={cn(
        styles.ButtonWrapper,
        disabled && styles.disabled,
        size && styles[size],
        isDark && styles.isDark
      )}
      disabled={disabled}
      {...other}
    >
      <div className={classNames(className, styles.ButtonStandard)} disabled={disabled}>
        {children}
      </div>
    </ButtonBase>
  )
}

ButtonStandard.propTypes = {
  className: string,
  disabled: bool
}

export default ButtonStandard
