import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from '../../Context/StatusContext'

import StatusColor from '.'

const stories = storiesOf('Core/StatusColor', module)

stories.add('Info', () => <StatusColor status="success">Content</StatusColor>, {
  info: {
    inline: true,
    text: `
      Takes a status, either directly or via a context provider, to use as the
      CSS \`color\` property.
    `
  }
})

stories.add('Status text (direct)', () => (
  <StatusColor status="notice">Content</StatusColor>
))

stories.add('Status text (via context)', () => (
  <StatusContextProvider status="error">
    <StatusColor>Content</StatusColor>
  </StatusContextProvider>
))
