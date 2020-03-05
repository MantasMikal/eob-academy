import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Element from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Element', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Element.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Element.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Element {...requiredProps()} />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output as specified element if set', function() {
    const wrapper = shallow(<Element {...requiredProps()} as="h1" />)
    expect(wrapper.type()).toEqual('h1')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output all additional props as expected', function() {
    const wrapper = shallow(
      <Element
        {...requiredProps()}
        className="example-class"
        title="Example title"
      />
    )
    expect(wrapper.prop('className')).toEqual('example-class')
    expect(wrapper.prop('title')).toEqual('Example title')
    expect(wrapper.text()).toEqual('Default content')
  })
})
