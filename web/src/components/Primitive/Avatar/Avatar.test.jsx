import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Avatar from '.'

const requiredProps = () => ({ name: 'Firstname Lastname' })

describe('Component: Avatar', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Avatar.propTypes, {})
    const expected = {
      name:
        'The prop `name` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Avatar.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Avatar {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Avatar')
    expect(wrapper.prop('title')).toEqual('Firstname Lastname')
    expect(wrapper.text()).toEqual('')
  })

  test('should output the expected markup when `initials` prop passed', function() {
    const wrapper = shallow(<Avatar {...requiredProps()} initials="FL" />)
    expect(wrapper.text()).toEqual('FL')
    expect(wrapper.prop('style').fontSize).toEqual(22)
    wrapper.setProps({ initials: 'ABC' })
    expect(wrapper.text()).toEqual('ABC')
    expect(wrapper.prop('style').fontSize).toEqual(15)
  })

  test('should output the expected markup when `src` prop passed', function() {
    const wrapper = shallow(<Avatar {...requiredProps()} src="/image.jpg" />)
    expect(wrapper.prop('className')).toEqual('Avatar hasImage')
    expect(wrapper.prop('style').backgroundImage).toEqual('url(/image.jpg)')
  })

  test('should output the expected markup when `size` prop passed', function() {
    const wrapper = shallow(<Avatar {...requiredProps()} size={96} />)
    expect(wrapper.prop('style').width).toEqual(96)
    expect(wrapper.prop('style').height).toEqual(96)
    expect(wrapper.prop('style').lineHeight).toEqual('96px')
  })

  test('should output the expected markup when `borderRadius` prop passed', function() {
    const wrapper = shallow(<Avatar {...requiredProps()} borderRadius={10} />)
    expect(wrapper.prop('style').borderRadius).toEqual(10)
    wrapper.setProps({ borderRadius: '1em' })
    expect(wrapper.prop('style').borderRadius).toEqual('1em')
  })

  test('should output additional styles when `backgroundColor` prop passed', function() {
    const wrapper = shallow(
      <Avatar {...requiredProps()} backgroundColor="#ff0" />
    )
    expect(wrapper.prop('style').backgroundColor).toEqual('#ff0')
  })

  test('should output additional styles when `color` prop passed', function() {
    const wrapper = shallow(<Avatar {...requiredProps()} color="#333" />)
    expect(wrapper.prop('style').color).toEqual('#333')
  })
})
