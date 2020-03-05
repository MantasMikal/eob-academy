import React from 'react'
import { storiesOf } from '@storybook/react'

import Element from '.'

const stories = storiesOf('Utility/Element', module)

stories.add('Info', () => <Element>Content wrapped in div</Element>, {
  info: {
    inline: true,
    text: `
      Low-level component which can be used within other components to
      specify which HTML element to use on a per-use basis.

      _Example_: would be used as the root level element within an optionally
      clickable component to allow the author to choose between a \`<div />\`,
      \`<a />\` or \`<button />\`.

      Unlikely to be used directly as authors could instead use the desired
      element.
      `
  }
})

stories.add('Default state', () => <Element>Content wrapped in div</Element>)

stories.add('With specified element', () => (
  <Element as="h1">Content wrapped in h1</Element>
))
