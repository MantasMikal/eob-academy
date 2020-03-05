import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveMedia from './'

const requiredProps = () => ({
  children: <img src="https://img.clock.co.uk/10" alt="" />,
  ratio: 1
})

describe('Component: ResponsiveMedia', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveMedia.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      ratio:
        'The prop `ratio` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid required props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveMedia.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ResponsiveMedia {...requiredProps()} />)
    expect(wrapper.prop('style').paddingBottom).toEqual('100%')
  })

  test('should handle a variety of ratio types', function() {
    const wrapper = shallow(<ResponsiveMedia {...requiredProps()} />)
    wrapper.setProps({ ratio: 1 })
    expect(wrapper.prop('style').paddingBottom).toEqual('100%')
    wrapper.setProps({ ratio: 9 / 16 })
    expect(wrapper.prop('style').paddingBottom).toEqual('56.25%')
    wrapper.setProps({ ratio: 1 / 2 })
    expect(wrapper.prop('style').paddingBottom).toEqual('50%')
    wrapper.setProps({ ratio: 2 / 1 })
    expect(wrapper.prop('style').paddingBottom).toEqual('200%')
    wrapper.setProps({ ratio: 1 / 100 })
    expect(wrapper.prop('style').paddingBottom).toEqual('1%')
    wrapper.setProps({ ratio: 100 / 1 })
    expect(wrapper.prop('style').paddingBottom).toEqual('10000%')
  })

  test('should round ratio percentage to 4 decimal places', function() {
    const wrapper = shallow(
      <ResponsiveMedia {...requiredProps()} ratio={321 / 111} />
    )
    expect(wrapper.prop('style').paddingBottom).toEqual('289.1892%')
  })
})
