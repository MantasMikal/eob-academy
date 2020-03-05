import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Floater from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Floater', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Floater.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Floater.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Floater {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Floater')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `align` prop passed', function() {
    const wrapper = shallow(<Floater {...requiredProps()} align="left" />)
    expect(wrapper.prop('className')).toEqual('Floater left')
  })

  test('should output additional className when `size` prop passed', function() {
    const wrapper = shallow(<Floater {...requiredProps()} size="medium" />)
    expect(wrapper.prop('className')).toEqual('Floater medium')
  })
})
