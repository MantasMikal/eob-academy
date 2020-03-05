import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { mount, shallow } from 'enzyme'
import Header from '.'

const requiredProps = () => ({
  navigation: (
    <ul>
      <li>Item 1</li>
      <li>Item 1</li>
    </ul>
  )
})

describe('Component: Header', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Header.propTypes, {})
    const expected = {
      navigation:
        'The prop `navigation` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Header.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Header {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Header')
    expect(wrapper.find('ul')).toHaveLength(1)
  })

  test('should toggle `isActive` className when toggle button clicked', function() {
    const wrapper = mount(<Header {...requiredProps()} foo />)
    const NavToggle = wrapper.find('IconButton')
    expect(wrapper.find('.HeaderNavigation.isActive')).toHaveLength(0)
    NavToggle.simulate('click')
    expect(wrapper.find('.HeaderNavigation.isActive')).toHaveLength(1)
    NavToggle.simulate('click')
    expect(wrapper.find('.HeaderNavigation.isActive')).toHaveLength(0)
  })
})
