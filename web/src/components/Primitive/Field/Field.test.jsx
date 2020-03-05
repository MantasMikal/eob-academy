import React from 'react'
import { shallow } from 'enzyme'
import Field from '.'

describe('Component: Field', function() {
  test('should output the expected markup', function() {
    const wrapper = shallow(
      <Field>
        <Field.Answer>Item one</Field.Answer>
        <Field.Assistance>Item one</Field.Assistance>
        <Field.Feedback>Item one</Field.Feedback>
        <Field.Question htmlFor="example">Item one</Field.Question>
        <Field.Required />
      </Field>
    )
    expect(wrapper.find(Field.Answer)).toHaveLength(1)
    expect(wrapper.find(Field.Assistance)).toHaveLength(1)
    expect(wrapper.find(Field.Feedback)).toHaveLength(1)
    expect(wrapper.find(Field.Question)).toHaveLength(1)
    expect(wrapper.find(Field.Required)).toHaveLength(1)
  })
})
