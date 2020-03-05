import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ButtonBase from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ButtonBase', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ButtonBase.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ButtonBase.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ButtonBase {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ButtonBase')
    expect(wrapper.dive().text()).toEqual('Default content')
  })

  test('should output additional styles when `block` prop passed', function() {
    const wrapper = shallow(<ButtonBase {...requiredProps()} block />)
    expect(wrapper.prop('className')).toEqual('ButtonBase block')
  })

  test('should output additional styles and attribute when `disabled` prop passed', function() {
    const wrapper = shallow(<ButtonBase {...requiredProps()} disabled />)
    expect(wrapper.prop('className')).toEqual('ButtonBase disabled')
    expect(wrapper.find('SmartLink[disabled]')).toHaveLength(1)
  })

  test('should pass additional props to SmartLink', function() {
    const wrapper = shallow(
      <ButtonBase {...requiredProps()} title="Example Title" />
    )
    expect(wrapper.find('SmartLink[title="Example Title"]')).toHaveLength(1)
  })
})
