import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import DescriptionCard from './component/DescriptionCard'

import styles from './DescriptionCards.module.scss'
import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'
import SmartLink from 'Primitive/SmartLink'

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
        <SmartLink to='/contact'>
          <ButtonStandard size='large' className={styles.Button}>
            <Type size='title'>The Button</Type>
          </ButtonStandard>
        </SmartLink>
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
