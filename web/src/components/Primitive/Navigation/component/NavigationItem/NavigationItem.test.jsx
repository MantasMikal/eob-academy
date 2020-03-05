import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import NavigationItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: NavigationItem', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(NavigationItem.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(NavigationItem.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<NavigationItem {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('NavigationItem')
    expect(wrapper.find('SmartLink').prop('children')).toEqual(
      'Default content'
    )
  })

  test('should output additional className when `active` prop passed', function() {
    const wrapper = shallow(<NavigationItem {...requiredProps()} active />)
    expect(wrapper.find('.NavigationItemLink').prop('className')).toEqual(
      'NavigationItemLink active'
    )
  })
})
