import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import { DarkContextProvider } from '.'

const requiredProps = () => ({ children: 'Default content', isDark: false })

describe('Component: DarkContext', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DarkContextProvider.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      isDark:
        'The prop `isDark` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      DarkContextProvider.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<DarkContextProvider {...requiredProps()} />)
    expect(wrapper.text()).toEqual('Default content')
  })
})
