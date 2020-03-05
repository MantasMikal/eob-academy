import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveImage from '.'

const requiredProps = () => ({
  alt: 'Default a11y text',
  src: '/image-800.jpg'
})

describe('Component: ResponsiveImage', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveImage.propTypes, {})
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
    const actual = validatePropTypes(ResponsiveImage.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ResponsiveImage {...requiredProps()} />)
    expect(wrapper.prop('alt')).toEqual('Default a11y text')
    expect(wrapper.prop('src')).toEqual('/image-800.jpg')
    expect(wrapper.prop('sizes')).toEqual(undefined)
    expect(wrapper.prop('srcSet')).toEqual(undefined)
  })

  test('should still output `alt` if empty string passed', function() {
    const wrapper = shallow(<ResponsiveImage {...requiredProps()} alt="" />)
    expect(wrapper.prop('alt')).toEqual('')
  })

  test('should output attribute if `sizes` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveImage
        {...requiredProps()}
        sizes={['(min-width: 200px) 50vw', '100vw']}
      />
    )
    expect(wrapper.prop('sizes')).toEqual('(min-width: 200px) 50vw,100vw')
  })

  test('should output attribute if `srcSet` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveImage
        {...requiredProps()}
        srcSet={[
          {
            width: 400,
            src: '/image-400.jpg'
          },
          {
            width: 800,
            src: '/image-800.jpg'
          }
        ]}
      />
    )
    expect(wrapper.prop('srcSet')).toEqual(
      '/image-400.jpg 400w, /image-800.jpg 800w'
    )
  })
})
