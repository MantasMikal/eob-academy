import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import CheckControlGroup from '.'

const requiredProps = () => ({
  a11yLabel: 'Example label',
  children: [
    <label key="1">
      Input 1
      <input type="checkbox" name="example-name" value="1" />
    </label>,
    <label key="2">
      Input 2
      <input type="checkbox" name="example-name" value="2" />
    </label>
  ]
})

describe('Component: CheckControlGroup', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(CheckControlGroup.propTypes, {})
    const expected = {
      a11yLabel:
        'The prop `a11yLabel` is marked as required in `Component`, but its value is `undefined`.',
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      CheckControlGroup.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<CheckControlGroup {...requiredProps()} />)
    expect(wrapper.find('label')).toHaveLength(2)
  })
})
