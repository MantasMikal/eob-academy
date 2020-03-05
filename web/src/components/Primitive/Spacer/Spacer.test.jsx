import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Spacer from '.'

const requiredProps = () => ({
  children: <h1>Example</h1>
})

describe('Component: Spacer', function() {
  test('should return errors if invalid default props passed', function() {
    const actual = validatePropTypes(Spacer.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
    expect(Object.keys(actual)).toHaveLength(1)
  })

  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(Spacer.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Spacer')
    expect(wrapper.dive().type()).toEqual('div')
  })

  test('should output as a different element when `as` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} as="span" />)
    expect(wrapper.dive().type()).toEqual('span')
  })

  test('should output additional styles when `m` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} m={2} />)
    expect(wrapper.prop('style')).toEqual({ margin: 16 })
  })

  test('should output additional styles when `mx` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} mx={2} />)
    expect(wrapper.prop('style')).toEqual({ marginLeft: 16, marginRight: 16 })
  })

  test('should output additional styles when `my` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} my={2} />)
    expect(wrapper.prop('style')).toEqual({ marginTop: 16, marginBottom: 16 })
  })

  test('should output additional styles when `mt` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} mt={2} />)
    expect(wrapper.prop('style')).toEqual({ marginTop: 16 })
  })

  test('should output additional styles when `mr` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} mr={2} />)
    expect(wrapper.prop('style')).toEqual({ marginRight: 16 })
  })

  test('should output additional styles when `mb` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} mb={2} />)
    expect(wrapper.prop('style')).toEqual({ marginBottom: 16 })
  })

  test('should output additional styles when `ml` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} ml={2} />)
    expect(wrapper.prop('style')).toEqual({ marginLeft: 16 })
  })

  test('should allow expected overrides if multiple overlapping margin props passed', function() {
    const wrapper = shallow(
      <Spacer {...requiredProps()} m={1} mx={2} mt={3} mr={4} />
    )
    expect(wrapper.prop('style')).toEqual({
      margin: 8,
      marginLeft: 16,
      marginRight: 32,
      marginTop: 24
    })
  })

  test('should output additional styles when `p` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} p={2} />)
    expect(wrapper.prop('style')).toEqual({ padding: 16 })
  })

  test('should output additional styles when `px` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} px={2} />)
    expect(wrapper.prop('style')).toEqual({ paddingLeft: 16, paddingRight: 16 })
  })

  test('should output additional styles when `py` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} py={2} />)
    expect(wrapper.prop('style')).toEqual({ paddingTop: 16, paddingBottom: 16 })
  })

  test('should output additional styles when `pt` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} pt={2} />)
    expect(wrapper.prop('style')).toEqual({ paddingTop: 16 })
  })

  test('should output additional styles when `pr` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} pr={2} />)
    expect(wrapper.prop('style')).toEqual({ paddingRight: 16 })
  })

  test('should output additional styles when `pb` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} pb={2} />)
    expect(wrapper.prop('style')).toEqual({ paddingBottom: 16 })
  })

  test('should output additional styles when `pl` prop passed', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} pl={2} />)
    expect(wrapper.prop('style')).toEqual({ paddingLeft: 16 })
  })

  test('should allow expected overrides if multiple overlapping padding props passed', function() {
    const wrapper = shallow(
      <Spacer {...requiredProps()} p={1} px={2} pt={3} pr={4} />
    )
    expect(wrapper.prop('style')).toEqual({
      padding: 8,
      paddingLeft: 16,
      paddingRight: 32,
      paddingTop: 24
    })
  })

  test('should output string formatted units as authored', function() {
    const wrapper = shallow(<Spacer {...requiredProps()} m="50%" />)
    expect(wrapper.prop('style')).toEqual({ margin: '50%' })
  })
})
