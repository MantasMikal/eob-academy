import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import VisuallyHidden from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: VisuallyHidden', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(VisuallyHidden.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(VisuallyHidden.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<VisuallyHidden {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('VisuallyHidden')
    expect(wrapper.text()).toEqual('Default content')
  })
})
