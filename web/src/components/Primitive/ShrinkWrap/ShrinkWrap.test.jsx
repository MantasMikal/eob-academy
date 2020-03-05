import React from 'react'
import { shallow } from 'enzyme'
import ShrinkWrap from '.'

describe('Component: ShrinkWrap', function() {
  test('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <ShrinkWrap>
        <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
        <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      </ShrinkWrap>
    )
    expect(wrapper.prop('children').length).toEqual(2)
    expect(
      wrapper
        .childAt(0)
        .dive()
        .text()
    ).toEqual('Item one')
    expect(
      wrapper
        .childAt(1)
        .dive()
        .text()
    ).toEqual('Item two')
  })
})
