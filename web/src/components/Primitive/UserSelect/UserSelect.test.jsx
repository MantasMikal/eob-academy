import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import UserSelect from '.'

import Element from '../Element'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: UserSelect', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(UserSelect.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(UserSelect.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<UserSelect {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('auto')
    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.childAt(0).text()).toEqual('Default content')
  })

  test('should output the expected markup with `all` prop set', function() {
    const wrapper = shallow(<UserSelect {...requiredProps()} all />)
    expect(wrapper.prop('className')).toEqual('all')
  })

  test('should output the expected markup with `none` prop set', function() {
    const wrapper = shallow(<UserSelect {...requiredProps()} none />)
    expect(wrapper.prop('className')).toEqual('none')
  })

  test('should output the expected markup with `text` prop set', function() {
    const wrapper = shallow(<UserSelect {...requiredProps()} text />)
    expect(wrapper.prop('className')).toEqual('text')
  })
})
