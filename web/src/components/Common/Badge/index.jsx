import React from 'react'
import PropTypes from 'prop-types'
import Type from 'Primitive/Type'

import styles from './Badge.module.scss'

const Bdage = ({ content, color }) => {
  return (
    <div className={styles.Badge} style={{ backgroundColor: color }}>
      <Type size="small" as="span">
        {content}
      </Type>
    </div>
  )
}

Bdage.propTypes = {}

export default Bdage
