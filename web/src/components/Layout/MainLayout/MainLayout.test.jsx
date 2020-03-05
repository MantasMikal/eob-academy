import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import MainLayout from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: MainLayout', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(MainLayout.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(MainLayout.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<MainLayout {...requiredProps()} />)
    expect(wrapper.find('SiteContainer')).toHaveLength(1)
    expect(wrapper.find('A11yNavigation')).toHaveLength(1)
    expect(wrapper.find('Header')).toHaveLength(1)
    expect(wrapper.find('Main')).toHaveLength(1)
    expect(wrapper.find('Footer')).toHaveLength(1)
  })
})
