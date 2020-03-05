import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { mount, shallow } from 'enzyme'
import PasswordControl from '.'

const requiredProps = () => ({})

describe('Component: PasswordControl', function() {
  // test('should return errors if required props missing', function() {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(PasswordControl.propTypes, {})
  //   const expected = {}
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(PasswordControl.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <PasswordControl {...requiredProps()} name="example" />
    )
    const Button = wrapper.dive().find('IconButton')
    expect(wrapper.prop('type')).toEqual('password')
    expect(Button.prop('icon')).toEqual('visibility-off')
    expect(Button.prop('a11yText')).toEqual('Reveal password')
  })

  test('should output the expected when set to `text` type', function() {
    const wrapper = shallow(
      <PasswordControl {...requiredProps()} name="example" type="text" />
    )
    const Button = wrapper.dive().find('IconButton')
    expect(wrapper.prop('type')).toEqual('text')
    expect(Button.prop('icon')).toEqual('visibility')
    expect(Button.prop('a11yText')).toEqual('Hide password')
  })

  test('should toggle types when button is clicked', function() {
    const wrapper = mount(
      <PasswordControl {...requiredProps()} name="example" />
    )
    expect(wrapper.find('DecoratedTextControl').prop('type')).toEqual(
      'password'
    )
    wrapper.find('IconButton').simulate('click')
    expect(wrapper.find('DecoratedTextControl').prop('type')).toEqual('text')
    wrapper.find('IconButton').simulate('click')
    expect(wrapper.find('DecoratedTextControl').prop('type')).toEqual(
      'password'
    )
  })
})
