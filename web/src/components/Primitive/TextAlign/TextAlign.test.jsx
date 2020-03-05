import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import TextAlign from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: TextAlign', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(TextAlign.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(TextAlign.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<TextAlign {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('TextAlign')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `left` prop passed', function() {
    const wrapper = shallow(<TextAlign {...requiredProps()} left />)
    expect(wrapper.prop('className')).toEqual('TextAlign left')
  })

  test('should output additional className when `right` prop passed', function() {
    const wrapper = shallow(<TextAlign {...requiredProps()} right />)
    expect(wrapper.prop('className')).toEqual('TextAlign right')
  })

  test('should output additional className when `center` prop passed', function() {
    const wrapper = shallow(<TextAlign {...requiredProps()} center />)
    expect(wrapper.prop('className')).toEqual('TextAlign center')
  })

  test('should output additional className when `justify` prop passed', function() {
    const wrapper = shallow(<TextAlign {...requiredProps()} justify />)
    expect(wrapper.prop('className')).toEqual('TextAlign justify')
  })
})
