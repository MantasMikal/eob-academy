import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'

import FieldTemplate from './'

const defaultProps = () => ({
  controlName: 'example',
  children: <input />,
  label: 'Example'
})

describe('Component: FieldTemplate', function() {
  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(FieldTemplate.propTypes, {})
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <FieldTemplate {...defaultProps()} template="text" />
    )
    expect(wrapper.find('TextFieldTemplate')).toHaveLength(1)
  })

  test('should output the expected markup with `template` set to `check`', function() {
    const wrapper = shallow(
      <FieldTemplate {...defaultProps()} template="check" />
    )
    expect(wrapper.find('CheckFieldTemplate')).toHaveLength(1)
  })

  test('should output the expected markup with `template` set to `multiText`', function() {
    const wrapper = shallow(
      <FieldTemplate {...defaultProps()} template="multiText" />
    )
    expect(wrapper.find('MultiTextFieldTemplate')).toHaveLength(1)
  })
})
