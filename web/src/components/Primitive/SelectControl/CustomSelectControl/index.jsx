import React, { useContext } from 'react'
import { bool, oneOf } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '../../../Context/StatusContext'

import styles from './CustomSelectControl.module.scss'

import NativeSelectControl from '../NativeSelectControl'

const CustomSelectControl = ({ multiple, status, ...other }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus
  const componentClassName = classNames(
    styles.CustomSelectControl,
    multiple && styles.multiple,
    derivedStatus && styles[derivedStatus]
  )

  return (
    <span className={componentClassName}>
      <NativeSelectControl
        multiple={multiple}
        status={derivedStatus}
        {...other}
      />
    </span>
  )
}

CustomSelectControl.propTypes = {
  multiple: bool,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

export default CustomSelectControl
