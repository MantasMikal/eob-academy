import React from 'react'
import { oneOf } from 'prop-types'

import CheckFieldTemplate from './CheckFieldTemplate'
import MultiTextFieldTemplate from './MultiTextFieldTemplate'
import TextFieldTemplate from './TextFieldTemplate'

const FieldTemplate = ({ template, ...other }) => {
  const componentMap = {
    check: () => <CheckFieldTemplate {...other} />,
    multiText: () => <MultiTextFieldTemplate {...other} />,
    text: () => <TextFieldTemplate {...other} />
  }

  return componentMap[template]()
}

FieldTemplate.defaultProps = {
  template: 'text'
}

FieldTemplate.propTypes = {
  template: oneOf(['check', 'multiText', 'text'])
}

export default FieldTemplate
