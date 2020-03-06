import React from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import ButtonBase from '../ButtonBase'

import styles from './ButtonStandard.module.scss'

const ButtonStandard = ({ className, disabled, children, ...other }) => {
  const isDark = useDarkContext()
  return (
    <ButtonBase
      className={cn(
        styles.ButtonWrapper,
        disabled && styles.disabled,
        isDark && styles.isDark,
        className
      )}
      disabled={disabled}
      {...other}
    >
      <div className={classNames(styles.ButtonStandard)} disabled={disabled}>
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
