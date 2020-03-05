import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import NativeCheckControl from '.'

const requiredProps = () => ({
  name: 'example-name',
  type: 'checkbox',
  value: 'example-value'
})

describe('Component: NativeCheckControl', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(NativeCheckControl.propTypes, {})
    const expected = {
      name:
        'The prop `name` is marked as required in `Component`, but its value is `undefined`.',
      type:
        'The prop `type` is marked as required in `Component`, but its value is `undefined`.',
      value:
        'The prop `value` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      NativeCheckControl.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<NativeCheckControl {...requiredProps()} />)
    expect(wrapper.type()).toEqual('input')
    expect(wrapper.prop('name')).toEqual('example-name')
    expect(wrapper.prop('value')).toEqual('example-value')
  })

  test('should add type-specific props if set', function() {
    const wrapper = shallow(
      <NativeCheckControl {...requiredProps()} required />
    )
    expect(wrapper.prop('required')).toEqual(true)
  })
})
