import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import A11yNavigation from '.'

const requiredProps = () => ({
  children: [
    <a key="1" href="#content">
      Jump to main content
    </a>,
    <a key="2" href="#navigation">
      Jump to primary navigation
    </a>
  ]
})

describe('Component: A11yNavigation', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(A11yNavigation.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(A11yNavigation.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<A11yNavigation {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('A11yNavigation')
    expect(wrapper.find('a')).toHaveLength(2)
  })
})
