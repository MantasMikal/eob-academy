import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Ellipsis from './'

const requiredProps = () => ({ children: 'Example content' })

describe('Component: Ellipsis', function() {
  test('should return errors if invalid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Ellipsis.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
    expect(Object.keys(actual)).toHaveLength(1)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Ellipsis.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Ellipsis {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Ellipsis')
  })

  test('should output additional styles if `maxWidth` set', function() {
    const wrapper = shallow(<Ellipsis {...requiredProps()} maxWidth={200} />)
    expect(wrapper.prop('style')).toEqual({ maxWidth: 200 })
    wrapper.setProps({ maxWidth: '20%' })
    expect(wrapper.prop('style')).toEqual({ maxWidth: '20%' })
  })
})
