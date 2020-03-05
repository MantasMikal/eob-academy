import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow, mount } from 'enzyme'
// import { BrowserRouter as Router } from 'react-router-dom'

import SmartLink from './'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: SmartLink', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(SmartLink.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(SmartLink.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  describe('Common functionality', function() {
    test('should output expected default attributes', function() {
      const wrapper = shallow(<SmartLink {...requiredProps()} />)
      expect(wrapper.prop('type')).toEqual('button')
      expect(wrapper.prop('className')).toEqual(
        undefined,
        'SmartLink should have no default className'
      )
      expect(wrapper.text()).toEqual('Default content')
    })

    test('should add additional props if passed', function() {
      const wrapper = shallow(
        <SmartLink {...requiredProps()} disabled title="Default title" />
      )
      expect(wrapper.prop('disabled')).toEqual(true)
      expect(wrapper.prop('title')).toEqual('Default title')
    })

    test('should add onClick function if passed', function() {
      const mockOnClick = jest.fn()
      const wrapper = mount(
        <SmartLink {...requiredProps()} onClick={mockOnClick} />
      )
      expect(mockOnClick.mock.calls.length).toBe(0)
      wrapper.simulate('click')
      expect(mockOnClick.mock.calls.length).toBe(1)
    })
  })

  describe('as a `<button>`:', function() {
    test('should render as a `<button>` if not passed an `href` prop', function() {
      const wrapper = shallow(<SmartLink {...requiredProps()} />)
      expect(wrapper.type()).toEqual('button')
      expect(wrapper.prop('type')).toEqual('button')
      expect(wrapper.text()).toEqual('Default content')
    })

    test('should allow a custom type prop', function() {
      const wrapper = shallow(<SmartLink {...requiredProps()} type="submit" />)
      expect(wrapper.type()).toEqual('button')
      expect(wrapper.prop('type')).toEqual('submit')
    })
  })

  describe('as an `<a>`', function() {
    test('should render as an `<a>` if passed an external `href` prop', function() {
      const wrapper = shallow(
        <SmartLink href="http://example.com">Link Text</SmartLink>
      )
      expect(wrapper.type()).toEqual('a')
      expect(wrapper.prop('href')).toEqual('http://example.com')
      expect(wrapper.prop('target')).toEqual(undefined)
      expect(wrapper.text()).toEqual('Link Text')
    })

    test('should not output a `type` prop if also passed an `href` prop', function() {
      const wrapper = shallow(
        <SmartLink type="submit" href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(wrapper.type()).toEqual('a')
      expect(wrapper.prop('type')).toEqual(undefined)
    })

    test('should output a `target` if prop set', function() {
      const wrapper = shallow(
        <SmartLink target="_self" href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(wrapper.type()).toEqual('a')
      expect(wrapper.prop('target')).toEqual('_self')
    })

    test('should output rel attribute if `target` prop set to _blank', function() {
      const wrapper = shallow(
        <SmartLink target="_blank" href="http://example.com">
          Link Text
        </SmartLink>
      )
      expect(wrapper.type()).toEqual('a')
      expect(wrapper.prop('target')).toEqual('_blank')
      expect(wrapper.prop('rel')).toEqual('noopener noreferrer')
    })
  })

  // describe('as a `<Link>`', function() {
  //   test('should render as `<Link>` if passed a `to` prop', function() {
  //     const wrapper = shallow(<SmartLink to="/internal">Link Text</SmartLink>)
  //     expect(wrapper.name()).toEqual('Link')
  //     expect(wrapper.prop('to')).toEqual('/internal')
  //   })

  //   test('should not output a `type` prop if also passed a `to` prop', function() {
  //     const wrapper = mount(
  //       <Router>
  //         <SmartLink type="submit" to="/internal">
  //           Link Text
  //         </SmartLink>
  //       </Router>
  //     )
  //     expect(wrapper.name()).toEqual('Link')
  //     expect(wrapper.prop('type')).toEqual(undefined)
  //   })
  // })
})
