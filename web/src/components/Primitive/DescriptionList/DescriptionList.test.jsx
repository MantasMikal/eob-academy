import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import DescriptionList from '.'

const requiredProps = () => ({
  items: { 'Term 1': 'Details 1', 'Term 2': 'Details 2' }
})

describe('Component: DescriptionList', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DescriptionList.propTypes, {})
    const expected = {
      items:
        'The prop `items` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DescriptionList.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<DescriptionList {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('DescriptionList')
    expect(wrapper.find('div')).toHaveLength(2)
    expect(wrapper.find('dt')).toHaveLength(2)
    expect(wrapper.find('dd')).toHaveLength(2)
  })
})
