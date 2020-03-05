import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import List from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: List', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(List.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(List.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<List {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('List')
    expect(wrapper.type()).toEqual('ul')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `inline` prop passed', function() {
    const wrapper = shallow(<List {...requiredProps()} inline />)
    expect(wrapper.prop('className')).toEqual('List inline')
  })

  test('should output additional className when `unstyled` prop passed', function() {
    const wrapper = shallow(<List {...requiredProps()} unstyled />)
    expect(wrapper.prop('className')).toEqual('List unstyled')
  })

  test('should output as `ol` when `ordered` prop passed', function() {
    const wrapper = shallow(<List {...requiredProps()} ordered />)
    expect(wrapper.prop('className')).toEqual('List')
    expect(wrapper.type()).toEqual('ol')
  })
})
