import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import BackgroundImage from '.'

const requiredProps = () => ({ alt: 'Default a11y text', src: '/image.jpg' })

describe('Component: BackgroundImage', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(BackgroundImage.propTypes, {})
    const expected = {
      alt:
        'The prop `alt` is marked as required in `Component`, but its value is `undefined`.',
      src:
        'The prop `src` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(BackgroundImage.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<BackgroundImage {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('BackgroundImage')
    expect(wrapper.prop('style')).toEqual({
      backgroundImage: 'url(/image.jpg)'
    })
    expect(wrapper.prop('role')).toEqual('img')
    expect(wrapper.prop('aria-label')).toEqual('Default a11y text')
  })

  test('should output additional className when `fillContainer` prop passed', function() {
    const wrapper = shallow(
      <BackgroundImage {...requiredProps()} fillContainer />
    )
    expect(wrapper.prop('className')).toEqual('BackgroundImage fillContainer')
  })

  test('should output additional styles when `color` prop passed', function() {
    const wrapper = shallow(
      <BackgroundImage {...requiredProps()} color="c0ffee" />
    )
    expect(wrapper.prop('style')).toEqual({
      backgroundColor: 'c0ffee',
      backgroundImage: 'url(/image.jpg)'
    })
  })

  test('should output additional styles when `position` prop passed', function() {
    const wrapper = shallow(
      <BackgroundImage {...requiredProps()} position="0 0" />
    )
    expect(wrapper.prop('style')).toEqual({
      backgroundImage: 'url(/image.jpg)',
      backgroundPosition: '0 0'
    })
  })

  test('should output additional styles when `ratio` prop passed', function() {
    const wrapper = shallow(
      <BackgroundImage {...requiredProps()} ratio={9 / 16} />
    )
    expect(wrapper.prop('style')).toEqual({
      backgroundImage: 'url(/image.jpg)',
      paddingBottom: '56.25%'
    })
  })

  test('should output additional styles when `size` prop passed', function() {
    const wrapper = shallow(
      <BackgroundImage {...requiredProps()} size="cover" />
    )
    expect(wrapper.prop('style')).toEqual({
      backgroundImage: 'url(/image.jpg)',
      backgroundSize: 'cover'
    })
  })

  test('should not output a11y attributes if alt=""', function() {
    const wrapper = shallow(<BackgroundImage {...requiredProps()} alt="" />)
    expect(wrapper.prop('role')).toEqual(undefined)
    expect(wrapper.prop('aria-label')).toEqual(undefined)
  })
})
