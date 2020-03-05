import React from 'react'
import { node, string } from 'prop-types'

import styles from './Description.module.scss'

import Icon from '../Icon'

const Description = ({ children, icon, term }) => (
  <dl className={styles.Description}>
    <dt className={styles.DescriptionTerm}>
      {icon && (
        <span className={styles.DescriptionIcon}>
          <Icon type={icon} width={16} a11yText="" />
        </span>
      )}
      <span>{term}</span>
    </dt>
    <dd className={styles.DescriptionDetails}>{children}</dd>
  </dl>
)

Description.propTypes = {
  children: node.isRequired,
  icon: string,
  term: string.isRequired
}

export default Description
