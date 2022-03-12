import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import DescriptionCard from './component/DescriptionCard'

import styles from './DescriptionCards.module.scss'

const DescriptionCards = ({ cards }) => {
  return (
    <div className={styles.DescriptionCards}>
      <div className={styles.Wrapper}>
        <div className={styles.Cards}>
          {cards.map((card, i) => (
            <DescriptionCard
              key={`DescriptionCard-${i}`}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

DescriptionCards.propTypes = {
  cards: arrayOf(
    shape({
      icon: string,
      title: string,
      description: string
    })
  )
}

export default DescriptionCards
