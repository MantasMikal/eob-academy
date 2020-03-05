import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '.'

describe('Component: Navigation', function() {
  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <Navigation id="example-id">
        <Navigation.Item>Item one</Navigation.Item>
        <Navigation.Item>Item two</Navigation.Item>
      </Navigation>
    )
    expect(wrapper.find(Navigation.Item)).toHaveLength(2)
    expect(
      wrapper
        .find(Navigation.Item)
        .at(0)
        .prop('children')
    ).toEqual('Item one')
    expect(
      wrapper
        .find(Navigation.Item)
        .at(1)
        .prop('children')
    ).toEqual('Item two')
  })
})
