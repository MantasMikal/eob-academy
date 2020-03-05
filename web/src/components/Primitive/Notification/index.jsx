import React, { useContext } from 'react'
import { func, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '../../Context/StatusContext'

import styles from './Notification.module.scss'

import IconButton from '../IconButton'
import ShrinkWrap from '../ShrinkWrap'

const Notification = props => {
  const { children, className, onDismiss, status } = props
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus

  return (
    <div
      className={classNames(
        styles.Notification,
        derivedStatus && styles[derivedStatus],
        className
      )}
    >
      {!onDismiss && children}
      {onDismiss && (
        <ShrinkWrap vAlign="middle" fullWidth>
          <ShrinkWrap.Item>{children}</ShrinkWrap.Item>
          <ShrinkWrap.Item shrink>
            <IconButton
              a11yText="Dismiss"
              icon="close"
              increaseHitArea
              onClick={onDismiss}
              small
            />
          </ShrinkWrap.Item>
        </ShrinkWrap>
      )}
    </div>
  )
}

Notification.propTypes = {
  children: node.isRequired,
  className: string,
  onDismiss: func,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning'])
}

export default Notification
