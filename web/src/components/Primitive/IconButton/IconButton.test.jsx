import React from 'react'
import { shallow } from 'enzyme'
import validatePropTypes from 'validate-prop-types'
import IconButton from './'

const requiredProps = () => ({
  a11yText: '',
  icon: '_placeholder'
})

describe('Component: IconButton', function() {
  test('should return errors if invalid default props passed', function() {
    const actual = validatePropTypes(IconButton.propTypes, {})
    const expected = {
      icon:
        'The prop `icon` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(IconButton.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<IconButton {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('IconButton')
  })

  test('should output additional styles when `rounded` prop passed', function() {
    const wrapper = shallow(<IconButton {...requiredProps()} rounded />)
    expect(wrapper.prop('className')).toEqual('IconButton rounded')
  })

  test('should output additional styles when `small` prop passed', function() {
    const wrapper = shallow(<IconButton {...requiredProps()} small />)
    expect(wrapper.prop('className')).toEqual('IconButton small')
  })

  test('should output additional styles when `solid` prop passed', function() {
    const wrapper = shallow(<IconButton {...requiredProps()} solid />)
    expect(wrapper.prop('className')).toEqual('IconButton solid')
  })

  test('should output additional styles when `increaseHitArea` prop passed', function() {
    const wrapper = shallow(<IconButton {...requiredProps()} increaseHitArea />)
    expect(wrapper.prop('className')).toEqual('IconButton increaseHitArea')
  })

  test('should output additional content when `children` prop passed', function() {
    const wrapper = shallow(
      <IconButton {...requiredProps()}>Example</IconButton>
    )
    expect(
      wrapper
        .find('SmartLink')
        .dive()
        .find('span')
        .text()
    ).toEqual('Example')
  })
})
