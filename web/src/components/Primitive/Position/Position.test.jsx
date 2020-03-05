import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Position from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Position', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Position.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Position.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Position {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Position static')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output the expected class when `absolute`', function() {
    const wrapper = shallow(<Position {...requiredProps()} absolute />)
    expect(wrapper.prop('className')).toEqual('Position absolute')
  })

  test('should output the expected class when `fixed`', function() {
    const wrapper = shallow(<Position {...requiredProps()} fixed />)
    expect(wrapper.prop('className')).toEqual('Position fixed')
  })

  test('should output the expected class when `relative`', function() {
    const wrapper = shallow(<Position {...requiredProps()} relative />)
    expect(wrapper.prop('className')).toEqual('Position relative')
  })

  test('should output the expected class when `sticky`', function() {
    const wrapper = shallow(<Position {...requiredProps()} sticky />)
    expect(wrapper.prop('className')).toEqual('Position sticky')
  })

  test('should allow additional styles to be passed', function() {
    const wrapper = shallow(
      <Position
        {...requiredProps()}
        style={{ top: '10px', right: 20, zIndex: 1 }}
      />
    )
    expect(wrapper.html()).toEqual(
      '<div class="Position static" style="top:10px;right:20px;z-index:1">Default content</div>'
    )
  })
})
