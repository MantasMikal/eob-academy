import React, { useContext } from 'react'
import {
  bool,
  func,
  instanceOf,
  number,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '../../Context/StatusContext'

import styles from './TextControl.module.scss'

const TextControl = ({
  autoComplete,
  className,
  controlRef,
  defaultValue,
  disabled,
  id,
  maxLength,
  minLength,
  multiLine,
  name,
  onBlur,
  onChange,
  onFocus,
  pattern,
  placeholder,
  readOnly,
  required,
  rows,
  size,
  status,
  tabIndex,
  type,
  value
}) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus
  const TextControlEl = multiLine ? 'textarea' : 'input'
  const componentClassName = classNames(
    styles.TextControl,
    multiLine && styles.multiLine,
    derivedStatus && styles[derivedStatus],
    className
  )

  return (
    <TextControlEl
      aria-invalid={status === 'error' || undefined}
      aria-required={required}
      autoComplete={autoComplete}
      // autoFocus is intentionally omitted for a11y reasons:
      // https://w3c.github.io/html/sec-forms.html#autofocusing-a-form-control-the-autofocus-attribute
      className={componentClassName}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      ref={controlRef}
      required={required}
      rows={multiLine ? rows : 3}
      size={size}
      tabIndex={tabIndex}
      type={!multiLine ? type : undefined}
      value={value}
    />
  )
}

TextControl.defaultProps = {
  type: 'text'
}

TextControl.propTypes = {
  autoComplete: oneOfType([bool, string]),
  className: string,
  controlRef: oneOfType([func, shape({ current: instanceOf(number) })]),
  defaultValue: string,
  disabled: bool,
  id: string,
  maxLength: number,
  minLength: number,
  multiLine: bool,
  name: string.isRequired,
  onBlur: func,
  onChange: func,
  onFocus: func,
  pattern: string,
  placeholder: string,
  readOnly: bool,
  required: bool,
  rows: number,
  size: number,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning']),
  tabIndex: number,
  type: string,
  value: string
}

export default TextControl
