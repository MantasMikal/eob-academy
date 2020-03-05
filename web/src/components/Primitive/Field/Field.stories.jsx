import React from 'react'
import { storiesOf } from '@storybook/react'

import Field from '.'
import TextControl from '../TextControl'

const stories = storiesOf('Form/Field', module)

stories.add(
  'Info',
  () => (
    <Field>
      <Field.Question htmlFor="example">
        First name <Field.Required />
      </Field.Question>
      <Field.Answer>
        <TextControl name="example" />
        <Field.Assistance>Assistance text</Field.Assistance>
      </Field.Answer>
    </Field>
  ),
  {
    info: {
      inline: true,
      text: `
        A collection of components that can be combined to create a single form
        field. Should be used in conjunction with an appropriate Control
        component.

        _Note: Consider using a pre-built FieldTemplate component for common
        use cases._
      `
    }
  }
)

stories.add('With status passed via context', () => (
  <Field status="success">
    <Field.Question htmlFor="example">
      First name <Field.Required />
    </Field.Question>
    <Field.Answer>
      <TextControl name="example" />
      <Field.Assistance>Assistance text</Field.Assistance>
      <Field.Feedback>Feedback text</Field.Feedback>
    </Field.Answer>
  </Field>
))
