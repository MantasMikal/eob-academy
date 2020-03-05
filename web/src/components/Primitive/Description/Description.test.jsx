import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Description from '.'

const requiredProps = () => ({
  children: 'Example content',
  term: 'Example term'
})

describe('Component: Description', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Description.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      term:
        'The prop `term` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Description.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Description {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Description')
    expect(wrapper.find('dt').text()).toEqual('Example term')
    expect(wrapper.find('dd').text()).toEqual('Example content')
    expect(wrapper.find('Icon').length).toEqual(0)
  })

  test('should output the expected markup when `icon` prop passed', function() {
    const wrapper = shallow(
      <Description {...requiredProps()} icon="_placeholder" />
    )
    expect(wrapper.find('Icon').length).toEqual(1)
  })
})
