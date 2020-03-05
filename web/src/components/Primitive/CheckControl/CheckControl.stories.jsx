import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from '../../Context/StatusContext'
import CheckControl from '.'

const stories = storiesOf('Form/CheckControl', module)

stories.add(
  'Info',
  () => (
    <CheckControl name="exampleCheck" value="1" type="checkbox">
      Example text
    </CheckControl>
  ),
  {
    info: {
      inline: true,
      text: `
        Styles check inputs (checkbox/radio) using CSS, by hiding the input and
        showing a styled placeholder.
      `
    }
  }
)

stories.add('As a checkbox', () => (
  <CheckControl name="exampleCheck" value="1" type="checkbox">
    Example text
  </CheckControl>
))

stories.add('As a checkbox (checked)', () => (
  <CheckControl name="exampleCheck" value="1" type="checkbox" checked>
    Example text
  </CheckControl>
))

stories.add('As a checkbox with status (direct)', () => (
  <CheckControl name="exampleSelect" type="checkbox" status="error" checked>
    Example text
  </CheckControl>
))

stories.add('As a checkbox with status (via context)', () => (
  <StatusContextProvider status="success">
    <CheckControl name="exampleSelect" type="checkbox" checked>
      Example text
    </CheckControl>
  </StatusContextProvider>
))

stories.add('As a radio', () => (
  <CheckControl name="exampleCheck" value="1" type="radio">
    Example text
  </CheckControl>
))

stories.add('As a radio (checked)', () => (
  <CheckControl name="exampleCheck" value="1" type="radio" checked>
    Example text
  </CheckControl>
))

stories.add('As a radio with status (direct)', () => (
  <CheckControl name="exampleSelect" type="radio" status="error" checked>
    Example text
  </CheckControl>
))

stories.add('As a radio with status (via context)', () => (
  <StatusContextProvider status="success">
    <CheckControl name="exampleSelect" type="radio" checked>
      Example text
    </CheckControl>
  </StatusContextProvider>
))

stories.add('As a native checkbox', () => (
  <CheckControl name="exampleSelect" type="checkbox" checked native>
    Example text
  </CheckControl>
))

stories.add('As a native radio', () => (
  <CheckControl name="exampleSelect" type="radio" checked native>
    Example text
  </CheckControl>
))
