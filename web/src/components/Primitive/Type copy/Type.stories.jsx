import React from 'react'
import { storiesOf } from './node_modules/@storybook/react'

import Type, { sizes } from '.'

const stories = storiesOf('Core/Type', module)

stories.add(
  'Info',
  () => (
    <Type size="title" element="h1">
      Example Type
    </Type>
  ),
  {
    info: {
      inline: true,
      text: `
        Outputs text with a given size/style and element.
      `
    }
  }
)

stories.add('All available sizes', () => (
  <div>
    {sizes.map(size => (
      <div style={{ margin: '5px 0 20px' }} key={`Type${size}`}>
        <code style={{ display: 'block' }}>{size}</code>
        <Type size={size}>Example content</Type>
      </div>
    ))}
  </div>
))

stories.add('Custom element', () => (
  <div>
    {['h1', 'a', 'span'].map(element => (
      <div style={{ margin: '5px 0 20px' }} key={`Type${element}`}>
        <code style={{ display: 'block' }}>{element}</code>
        <Type as={element}>Example content as &lt;{element}/&gt;</Type>
      </div>
    ))}
  </div>
))

stories.add('with “tight” line-height modifier', () => (
  <div>
    <div style={{ margin: '5px 0 20px' }}>
      <code style={{ display: 'block' }}>without `tight` modifier</code>
      <Type>
        Example content <br />
        over multiple lines
      </Type>
    </div>
    <div style={{ margin: '5px 0 20px' }}>
      <code style={{ display: 'block' }}>with `tight` modifier</code>
      <Type tight>
        Example content <br />
        over multiple lines
      </Type>
    </div>
  </div>
))
