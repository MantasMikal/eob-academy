import React from 'react'
import { storiesOf } from '@storybook/react'

import SpacedList from '.'

const stories = storiesOf('Utility/SpacedList', module)

stories.add(
  'Info',
  () => (
    <SpacedList>
      <div style={{ background: 'tan', padding: 8 }}>Item 1</div>
      <div style={{ background: 'tan', padding: 8 }}>Item 2</div>
      <div style={{ background: 'tan', padding: 8 }}>Item 3</div>
    </SpacedList>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which evenly vertically-spaces its children.
      `
    }
  }
)

stories.add('Default state', () => (
  <SpacedList>
    <div style={{ background: 'tan', padding: 8 }}>Item 1</div>
    <div style={{ background: 'tan', padding: 8 }}>Item 2</div>
    <div style={{ background: 'tan', padding: 8 }}>Item 3</div>
  </SpacedList>
))
