import React from 'react'
import { object } from 'prop-types'

import styles from './DescriptionList.module.scss'

const DescriptionList = ({ items }) => (
  <dl className={styles.DescriptionList}>
    {Object.entries(items).map((item, i) => {
      const [term, details] = item

      return (
        <div
          className={styles.DescriptionListItem}
          key={`DescriptionListItem${i}`}
        >
          <dt className={styles.DescriptionListTerm}>{term}</dt>
          <dd className={styles.DescriptionListDetails}>{details}</dd>
        </div>
      )
    })}
  </dl>
)

DescriptionList.propTypes = {
  items: object.isRequired
}

export default DescriptionList
