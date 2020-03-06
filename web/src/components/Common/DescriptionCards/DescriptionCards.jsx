import React from 'react'
import PropTypes from 'prop-types'

import DescriptionCard from './component/DescriptionCard'

import styles from './DescriptionCards.module.scss'
import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'

const DescriptionCards = ({ cards }) => {
  console.log(cards)
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
        <ButtonStandard size='large' className={styles.Button}>The Button</ButtonStandard>
      </div>
    </div>
  )
}

DescriptionCards.propTypes = {}

export default DescriptionCards
