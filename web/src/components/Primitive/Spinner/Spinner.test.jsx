import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Spinner from '.'

const requiredProps = () => ({})

describe('Component: Spinner', function() {
  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Spinner.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Spinner {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Spinner')
  })

  test('should output additional className when `paused` prop passed', function() {
    const wrapper = shallow(<Spinner {...requiredProps()} paused />)
    expect(wrapper.prop('className')).toEqual('Spinner paused')
  })

  test('should output additional styles when `revealDelay` prop passed', function() {
    const wrapper = shallow(<Spinner {...requiredProps()} revealDelay={1000} />)
    expect(wrapper.prop('style')).toEqual({ animationDelay: '1000ms' })
  })

  test('should output additional styles when `size` prop passed', function() {
    const wrapper = shallow(<Spinner {...requiredProps()} size={30} />)
    expect(wrapper.prop('style')).toEqual({ height: 30, width: 30 })
  })
})
