import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import { StatusContextProvider } from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: StatusContext', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(StatusContextProvider.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      StatusContextProvider.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<StatusContextProvider {...requiredProps()} />)
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output status value when `status` prop passed', function() {
    const wrapper = shallow(
      <StatusContextProvider {...requiredProps()} status="success" />
    )
    expect(wrapper.prop('value')).toEqual('success')
  })
})
