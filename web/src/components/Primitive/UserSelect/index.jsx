import React from 'react'
import { bool, node, string } from 'prop-types'

import styles from './UserSelect.module.scss'

import Element from '../Element'

const UserSelect = ({ all, as, children, none, text }) => {
  const getSelectionType = () => {
    if (none) return 'none'
    if (text) return 'text'
    if (all) return 'all'
    return 'auto'
  }

  return (
    <Element
      className={(styles.UserSelect, styles[getSelectionType()])}
      as={as}
    >
      {children}
    </Element>
  )
}

UserSelect.propTypes = {
  children: node.isRequired,
  as: string,

  all: bool,
  none: bool,
  text: bool
}

export default UserSelect
