import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon, { types, vAligns } from '.'

const stories = storiesOf('Utility/Icon', module)

stories.add(
  'Info',
  () => <Icon type="_placeholder" a11yText="Placeholder icon" />,
  {
    info: {
      inline: true,
      text: `
      A wrapping element containing an inline SVG. Displays at the SVGs native
      size by default, but a custom width/height can be passed.

      An a11yText prop is required, similar to how an image requires an alt
      attribute. If the icon is purely decorational, or is described by text
      directly next to it, then a blank string can be passed as a11yText to
      hide the icon from assistive technology.
    `
    }
  }
)

stories.add('with all available types', () => (
  <div>
    {types.map((type, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon type={type} a11yText={`${type} icon`} vAlign="middle" />{' '}
        <code>{type}</code>
      </div>
    ))}
  </div>
))

stories.add('with no a11y text', () => <Icon type="_placeholder" a11yText="" />)

stories.add('with custom width', () => (
  <div>
    {[20, 50, 100].map((width, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon type="_placeholder" a11yText="Placeholder icon" width={width} />{' '}
        <code>
          {width}
          px
        </code>
      </div>
    ))}
  </div>
))

stories.add('with custom height', () => (
  <div>
    {[20, 50, 100].map((height, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon type="_placeholder" a11yText="Placeholder icon" height={height} />{' '}
        <code>
          {height}
          px
        </code>
      </div>
    ))}
  </div>
))

stories.add('with custom vAlign', () => (
  <div>
    {vAligns.map((vAlign, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon
          type="_placeholder"
          a11yText="Placeholder icon"
          height={100}
          vAlign={vAlign}
        />{' '}
        <code>{vAlign}</code>
      </div>
    ))}
  </div>
))
