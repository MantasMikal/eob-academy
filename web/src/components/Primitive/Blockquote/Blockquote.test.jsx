import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Blockquote from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Blockquote', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Blockquote.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Blockquote.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Blockquote {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Blockquote')
    expect(wrapper.find('Type')).toHaveLength(1)
    expect(
      wrapper
        .find('Type')
        .at(0)
        .dive()
        .dive()
        .text()
    ).toEqual('Default content')
  })

  test('should output additional content when `citation` prop passed', function() {
    const wrapper = shallow(
      <Blockquote {...requiredProps()} citation="Firstname Lastname" />
    )
    expect(wrapper.find('Type')).toHaveLength(2)
    expect(
      wrapper
        .find('Type')
        .at(0)
        .dive()
        .dive()
        .text()
    ).toEqual('Default content')
    expect(
      wrapper
        .find('Type')
        .at(1)
        .dive()
        .dive()
        .text()
    ).toEqual('Firstname Lastname')
  })

  test('should output additional styles when `quoteMarks` prop passed', function() {
    const wrapper = shallow(<Blockquote {...requiredProps()} quoteMarks />)
    expect(wrapper.prop('className')).toEqual('Blockquote quoteMarks')
  })
})
