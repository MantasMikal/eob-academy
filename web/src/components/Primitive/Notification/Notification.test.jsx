import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Notification from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Notification', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Notification.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Notification.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Notification {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Notification')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output the expected markup when `onDismiss` prop passed', function() {
    const wrapper = shallow(
      <Notification {...requiredProps()} onDismiss={() => {}} />
    )
    expect(wrapper.find('IconButton').length).toEqual(1)
  })

  test('should output additional className when `status` prop passed', function() {
    const wrapper = shallow(
      <Notification {...requiredProps()} status="success" />
    )
    expect(wrapper.prop('className')).toEqual('Notification success')
  })
})
