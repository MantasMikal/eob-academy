import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from '../../Context/StatusContext'
import TextControl from '.'

const stories = storiesOf('Form/TextControl', module)

stories.add(
  'Info',
  () => (
    <TextControl
      name="exampleText"
      type="text"
      placeholder="Example placeholder"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Standard text-style control, which defaults to a \`text\` type, but can
        also be used for most common text-based types, e.g. \`url\`, \`email\`,
        \`number\`. Some types, such as \`password\` provide their own wrapping
        components which extend this component to add additional functionality
        or styling.

        _Note: some demos do not update when you type as they are presented as
        controlled components, but using dummy onChange functions._
    `
    }
  }
)

stories.add('Default state', () => (
  <TextControl
    name="exampleText"
    type="text"
    placeholder="Example placeholder"
  />
))

stories.add('Text with value', () => (
  <TextControl
    name="exampleText"
    type="text"
    value="Example value"
    onChange={() => {}}
  />
))

stories.add('Text with status (direct)', () => (
  <TextControl name="exampleText" type="text" status="error" />
))

stories.add('Text with status (via context)', () => (
  <StatusContextProvider status="success">
    <TextControl name="exampleText" type="text" />
  </StatusContextProvider>
))

stories.add('Multi-line (textarea)', () => (
  <TextControl
    name="exampleTextarea"
    placeholder="Example placeholder"
    multiLine
  />
))

stories.add('Multi-line with custom height', () => (
  <TextControl name="exampleTextarea" multiLine rows={10} />
))
