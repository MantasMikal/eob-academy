import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ButtonStandard from '.'

const requiredProps = () => ({})

const defaultProps = () => ({ children: 'Example content' })

describe('Component: ButtonStandard', function() {
  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ButtonStandard.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <ButtonStandard {...requiredProps()} {...defaultProps()} />
    )
    expect(wrapper.prop('className')).toEqual('ButtonStandard')
  })

  test('should output additional className when `disabled` prop passed', function() {
    const wrapper = shallow(
      <ButtonStandard {...requiredProps()} {...defaultProps()} disabled />
    )
    expect(wrapper.prop('className')).toEqual('ButtonStandard disabled')
  })
})
