import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Byline from '.'

const requiredProps = () => ({})

describe('Component: Byline', function() {
  // test('should return errors if required props missing', function() {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(Byline.propTypes, {})
  //   const expected = {}
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Byline.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output nothing without expected props', function() {
    const wrapper = shallow(<Byline {...requiredProps()} />)
    expect(wrapper.type()).toEqual(null)
  })

  test('should output expected content when `author` prop passed', function() {
    const wrapper = shallow(
      <Byline {...requiredProps()} author="Firstname Lastname" />
    )
    expect(wrapper.find('.BylineAuthor').text()).toEqual('Firstname Lastname')
  })

  test('should output expected content when `displayDate` prop passed', function() {
    const wrapper = shallow(
      <Byline {...requiredProps()} displayDate="1 Jan 2020" />
    )
    expect(wrapper.find('.BylineDate').text()).toEqual('1 Jan 2020')
  })

  test('should output expected content when `displayDate` and `timestamp` props passed', function() {
    const wrapper = shallow(
      <Byline
        {...requiredProps()}
        displayDate="1 Jan 2020"
        timestamp="2020-01-01T00:00:00Z"
      />
    )
    expect(wrapper.find('time').text()).toEqual('1 Jan 2020')
    expect(wrapper.find('time').prop('dateTime')).toEqual(
      '2020-01-01T00:00:00Z'
    )
  })

  test('should output default separator when `author` and `displayDate` props passed', function() {
    const wrapper = shallow(
      <Byline
        {...requiredProps()}
        author="Firstname Lastname"
        displayDate="1 Jan 2020"
      />
    )
    expect(
      wrapper
        .find('Type')
        .dive()
        .dive()
        .text()
    ).toEqual('1 Jan 2020 - Firstname Lastname')
  })

  test('should output custom separator when `author` and `displayDate` props passed', function() {
    const wrapper = shallow(
      <Byline
        {...requiredProps()}
        author="Firstname Lastname"
        displayDate="1 Jan 2020"
        separator=" • "
      />
    )
    expect(
      wrapper
        .find('Type')
        .dive()
        .dive()
        .text()
    ).toEqual('1 Jan 2020 • Firstname Lastname')
  })
})
