import React from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './NavigationItem.module.scss'

import SmartLink from '../../../SmartLink'

const NavigationItem = ({ children, active, ...other }) => (
  <li className={classNames(styles.NavigationItem)}>
    <SmartLink
      className={classNames(styles.NavigationItemLink, active && styles.active)}
      {...other}
    >
      {children}
    </SmartLink>
  </li>
)

NavigationItem.displayName = 'NavigationItem'

NavigationItem.propTypes = {
  active: bool,
  children: node.isRequired
}

export default NavigationItem
