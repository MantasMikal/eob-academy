import React from 'react'
import { storiesOf } from '@storybook/react'

import List from '.'

const stories = storiesOf('Utility/List', module)

const items = [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
  <li key="3">Item 3</li>
]

stories.add('Info', () => <List unstyled>{items}</List>, {
  info: {
    inline: true,
    text: `
      A simple list component with options to unset default styling when using
      as a non-traditional list, e.g. as a list of navigation items.

      If no styling adjustments are required, just use the standard \`<ul>\` or
      \`<ol>\` elements directly.

      Defaults to \`<ul>\`, but can be switched to \`<ol>\` by passing an
      \`ordered\` prop.
    `
  }
})

stories.add('Default', () => <List>{items}</List>)

stories.add('Inline', () => <List inline>{items}</List>)

stories.add('Unstyled', () => <List unstyled>{items}</List>)

stories.add('Ordered', () => <List ordered>{items}</List>)
