import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import GlobalMeta from '.'

const requiredProps = () => ({ themeColor: '#0f0', title: 'Example Title' })

describe('Component: GlobalMeta', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(GlobalMeta.propTypes, {})
    const expected = {
      themeColor:
        'The prop `themeColor` is marked as required in `Component`, but its value is `undefined`.',
      title:
        'The prop `title` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(GlobalMeta.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<GlobalMeta {...requiredProps()} />)
    expect(wrapper.find('[name="theme-color"]')).toHaveLength(1)
    expect(wrapper.find('[name="application-name"]')).toHaveLength(1)
    expect(wrapper.find('[name="google-site-verification"]')).toHaveLength(0)
  })

  test('should output the expected markup with optional props', function() {
    const wrapper = shallow(
      <GlobalMeta {...requiredProps()} googleSiteVerification="aaa" />
    )
    expect(wrapper.find('[name="google-site-verification"]')).toHaveLength(1)
  })

  test('should output the expected icons', function() {
    const wrapper = shallow(
      <GlobalMeta {...requiredProps()} googleSiteVerification="aaa" />
    )
    expect(wrapper.find('[rel="shortcut icon"]')).toHaveLength(1)
    expect(wrapper.find('[rel="apple-touch-icon"]')).toHaveLength(4)
    expect(wrapper.find('[rel="icon"][sizes="16x16"]')).toHaveLength(1)
    expect(wrapper.find('[rel="icon"][sizes="32x32"]')).toHaveLength(1)
    expect(wrapper.find('[rel="icon"][sizes="192x192"]')).toHaveLength(1)
  })
})
