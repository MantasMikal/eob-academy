import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Container from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Container', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Container.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Container.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Container {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Container')
    expect(wrapper.dive().text()).toEqual('Default content')
  })

  test('should output additional className when `center` prop passed', function() {
    const wrapper = shallow(<Container {...requiredProps()} center />)
    expect(wrapper.prop('className')).toEqual('Container center')
  })

  test('should output additional className when `gutter` prop passed', function() {
    const wrapper = shallow(<Container {...requiredProps()} gutter />)
    expect(wrapper.prop('className')).toEqual('Container gutter')
  })

  test('should output additional className when `size` prop passed', function() {
    const wrapper = shallow(<Container {...requiredProps()} size="small" />)
    expect(wrapper.prop('className')).toEqual('Container small')
  })

  test('should output additional className when `noClearfix` prop passed', function() {
    const wrapper = shallow(<Container {...requiredProps()} noClearfix />)
    expect(wrapper.prop('className')).toEqual('Container noClearfix')
  })
})
