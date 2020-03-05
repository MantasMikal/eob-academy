import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import CustomCheckControl from '.'

const requiredProps = () => ({ type: 'checkbox' })

const defaultProps = () => ({
  name: 'example',
  value: '1'
})

describe('Component: CustomCheckControl', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(CustomCheckControl.propTypes, {})
    const expected = {
      type:
        'The prop `type` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      CustomCheckControl.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <CustomCheckControl {...requiredProps()} {...defaultProps()} />
    )
    expect(wrapper.type()).toEqual('span')
    expect(wrapper.find('NativeCheckControl').prop('type')).toEqual('checkbox')
    expect(wrapper.prop('className')).toEqual('CustomCheckControl checkbox')
  })

  test('should output as expected when `radio` type passed', function() {
    const wrapper = shallow(
      <CustomCheckControl
        {...requiredProps()}
        {...defaultProps()}
        type="radio"
      />
    )
    expect(wrapper.find('NativeCheckControl').prop('type')).toEqual('radio')
    expect(wrapper.prop('className')).toEqual('CustomCheckControl radio')
  })

  test('should output expected styles when `status` passed', function() {
    const wrapper = shallow(
      <CustomCheckControl
        {...requiredProps()}
        {...defaultProps()}
        status="error"
      />
    )
    expect(wrapper.prop('className')).toEqual(
      'CustomCheckControl checkbox error'
    )
  })
})
