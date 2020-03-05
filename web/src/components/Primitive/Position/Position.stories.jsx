import React from 'react'
import { storiesOf } from '@storybook/react'

import Position from '.'

const stories = storiesOf('Utility/Position', module)

const wrapperStyles = {
  height: 100,
  position: 'relative',
  border: '10px solid #aaa'
}

stories.add(
  'Info',
  () => (
    <Position relative style={{ top: -10, left: '30%' }}>
      Positioned content
    </Position>
  ),
  {
    info: {
      inline: true,
      text: `A helper component which can be useful for ad-hoc positioning
        of child components when building layouts.`
    }
  }
)

stories.add('Static (default)', () => (
  <div style={wrapperStyles}>
    <Position>Content</Position>
  </div>
))

stories.add('Relative', () => (
  <div style={wrapperStyles}>
    <Position relative style={{ top: 10, left: 10 }}>
      Content
    </Position>
  </div>
))

stories.add('Absolute', () => (
  <div style={wrapperStyles}>
    <Position absolute style={{ top: '50%' }}>
      Content
    </Position>
  </div>
))

stories.add('Fixed', () => (
  <div style={{ ...wrapperStyles, height: 2000 }}>
    <Position fixed style={{ bottom: 0 }}>
      Content
    </Position>
  </div>
))

stories.add('Sticky', () => (
  <div style={{ ...wrapperStyles, height: 2000 }}>
    <Position sticky style={{ top: 0 }}>
      Content
    </Position>
  </div>
))
