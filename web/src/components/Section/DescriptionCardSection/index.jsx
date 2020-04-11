import React from 'react'

import Container from 'Primitive/Container'
import DescriptionCards from 'Common/DescriptionCards'
import descriptionCards from '../../../fixture/description-cards'

const DescriptionCardSection = ({cards}) => {
  return (
    <Container size="wide" center gutter spacious as="section">
      <DescriptionCards cards={cards} />
    </Container>
  )
}

DescriptionCardSection.propTypes = {}

export default DescriptionCardSection
