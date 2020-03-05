import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import DecoratedTextControl from './'

const requiredProps = () => ({})

describe('Component: DecoratedTextControl', function() {
  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(
      DecoratedTextControl.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <DecoratedTextControl {...requiredProps()} name="example" />
    )
    expect(wrapper.prop('className')).toEqual('DecoratedTextControl')
  })

  test('should output additional `before` component', function() {
    const wrapper = shallow(
      <DecoratedTextControl
        {...requiredProps()}
        name="example"
        before={<p />}
      />
    )
    expect(wrapper.find('DecoratedTextControlDecoration p')).toHaveLength(1)
    expect(wrapper.prop('className')).toEqual('DecoratedTextControl before')
  })

  test('should output additional `before` component with interactive styles', function() {
    const wrapper = shallow(
      <DecoratedTextControl
        {...requiredProps()}
        name="example"
        before={<p />}
        beforeInteractive
      />
    )
    expect(wrapper.prop('className')).toEqual('DecoratedTextControl before')
    expect(
      wrapper
        .find('DecoratedTextControlDecoration')
        .dive()
        .prop('className')
    ).toEqual('DecoratedTextControlDecoration interactive')
  })

  test('should output additional `after` component', function() {
    const wrapper = shallow(
      <DecoratedTextControl {...requiredProps()} name="example" after={<p />} />
    )
    expect(wrapper.find('DecoratedTextControlDecoration p')).toHaveLength(1)
    expect(wrapper.prop('className')).toEqual('DecoratedTextControl after')
  })

  test('should output additional `after` component with interactive styles', function() {
    const wrapper = shallow(
      <DecoratedTextControl
        {...requiredProps()}
        name="example"
        after={<p />}
        afterInteractive
      />
    )
    expect(wrapper.prop('className')).toEqual('DecoratedTextControl after')
    expect(
      wrapper
        .find('DecoratedTextControlDecoration')
        .dive()
        .prop('className')
    ).toEqual('DecoratedTextControlDecoration interactive')
  })
})
