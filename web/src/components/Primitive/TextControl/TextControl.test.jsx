import React from 'react'
import { shallow } from 'enzyme'
import validatePropTypes from 'validate-prop-types'

import TextControl from '.'

const requiredProps = () => ({
  name: 'example'
})

describe('Component: TextControl', function() {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  test('should return errors if invalid default props passed', function() {
    const actual = validatePropTypes(TextControl.propTypes, {})
    const expected = {
      name:
        'The prop `name` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(TextControl.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should add expected default props', function() {
    const wrapper = shallow(<TextControl {...requiredProps()} />)
    expect(wrapper.type()).toEqual('input')
    expect(wrapper.prop('placeholder')).toEqual(undefined)
    expect(wrapper.prop('className')).toEqual('TextControl')
  })

  test('should output additional styles when `multiLine` prop passed', function() {
    const wrapper = shallow(<TextControl {...requiredProps()} multiLine />)
    expect(wrapper.prop('className')).toEqual('TextControl multiLine')
  })

  test('should add props if set', function() {
    const wrapper = shallow(
      <TextControl {...requiredProps()} placeholder="Example placeholder" />
    )
    expect(wrapper.prop('placeholder')).toEqual('Example placeholder')
  })

  test('should output expected styles when `status` passed', function() {
    const wrapper = shallow(<TextControl {...requiredProps()} status="error" />)
    expect(wrapper.prop('className')).toEqual('TextControl error')
  })

  test('should add additional classes when `className` passed', function() {
    const wrapper = shallow(
      <TextControl {...requiredProps()} className="additional" />
    )
    expect(wrapper.prop('className')).toEqual('TextControl additional')
  })
})
