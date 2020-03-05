import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { mount } from 'enzyme'
import VimeoEmbed, { VimeoEmbedFallbackUrl } from '.'

const requiredProps = () => ({ videoId: '123' })

describe('Component: VimeoEmbed', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(VimeoEmbed.propTypes, {})
    const expected = {
      videoId:
        'The prop `videoId` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(VimeoEmbed.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?'
    )
  })

  test('should output additional querystring parameter if `hideByline` prop passed', function() {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} hideByline />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?byline=0'
    )
  })

  test('should output additional querystring parameter if `hideTitle` prop passed', function() {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} hideTitle />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?title=0'
    )
  })

  test('should output additional querystring parameter if `color` prop passed', function() {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} color="123456" />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?color=123456'
    )
    wrapper.setProps({ color: '#654321' })
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?color=654321'
    )
  })

  test('should output additional fragment parameter `start` prop passed', function() {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} start="20" />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?#t=20s'
    )
  })

  test('should export a fallback URL', function() {
    expect(VimeoEmbedFallbackUrl('123')).toEqual('https://vimeo.com/123')
  })
})
