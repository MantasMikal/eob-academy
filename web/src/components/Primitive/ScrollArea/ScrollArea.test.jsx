import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ScrollArea from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ScrollArea', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ScrollArea.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ScrollArea.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ScrollArea {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ScrollArea vertical')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output the expected markup `horizontal` axis', function() {
    const wrapper = shallow(<ScrollArea {...requiredProps()} horizontal />)
    expect(wrapper.prop('className')).toEqual('ScrollArea horizontal')
  })

  test('should output additional className when `hideScrollbar` prop passed', function() {
    const wrapper = shallow(<ScrollArea {...requiredProps()} hideScrollbar />)
    expect(wrapper.prop('className')).toEqual(
      'ScrollArea hideScrollbar vertical'
    )
  })
})
