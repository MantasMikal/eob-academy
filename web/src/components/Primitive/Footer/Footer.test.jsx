import React from 'react'
// import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Footer from '.'

const requiredProps = () => ({})

describe('Component: Footer', function() {
  // test('should return errors if required props missing', function() {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(Footer.propTypes, {})
  //   const expected = {}
  //   expect(actual).toEqual(expected)
  // })

  // test('shouldn’t error if valid default props passed', function() {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(Footer.propTypes, requiredProps())
  //   const expected = undefined
  //   expect(actual).toEqual(expected)
  // })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Footer {...requiredProps()} />)
    expect(wrapper.type()).toEqual('footer')
  })
})
