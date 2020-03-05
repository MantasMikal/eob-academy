import React from 'react'
import { shallow } from 'enzyme'
import validatePropTypes from 'validate-prop-types'

import SelectControl from './'

const requiredProps = () => ({})

describe('Component: SelectControl', function() {
  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(SelectControl.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should render a CustomSelectControl by default', function() {
    const wrapper = shallow(
      <SelectControl name="exampleName">
        <option>Example</option>
      </SelectControl>
    )
    expect(wrapper.name()).toEqual('CustomSelectControl')
  })

  test('should render a NativeSelectControl if passed `native` prop', function() {
    const wrapper = shallow(
      <SelectControl name="exampleName" native>
        <option>Example</option>
      </SelectControl>
    )
    expect(wrapper.name()).toEqual('NativeSelectControl')
  })
})
