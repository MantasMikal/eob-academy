import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import NavigationWrapper from '.'

const requiredProps = () => ({
  children: [<button key="1">One</button>, <button key="2">Two</button>],
  id: 'example-id'
})

describe('Component: NavigationWrapper', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(NavigationWrapper.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      id:
        'The prop `id` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      NavigationWrapper.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<NavigationWrapper {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('NavigationWrapper')
    expect(wrapper.find('button')).toHaveLength(2)
    expect(wrapper.prop('id')).toEqual('example-id')
  })
})
