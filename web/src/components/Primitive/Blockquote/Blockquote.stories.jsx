import React from 'react'
import { storiesOf } from '@storybook/react'

import Blockquote from '.'

const stories = storiesOf('Core/Blockquote', module)

stories.add(
  'Info',
  () => (
    <Blockquote citation="Firstname Lastname" quotemarks>
      This is an amazing pull quote for an article
    </Blockquote>
  ),
  {
    info: {
      inline: true,
      text: `
        Semantic markup for a quotation, with optional attribution.
      `
    }
  }
)

stories.add('Quotation only', () => (
  <Blockquote>This is an amazing pull quote for an article</Blockquote>
))

stories.add('With citation', () => (
  <Blockquote citation="Firstname Lastname">
    This is an amazing pull quote for an article
  </Blockquote>
))

stories.add('With quote marks', () => (
  <Blockquote quoteMarks>
    This is an amazing pull quote for an article
  </Blockquote>
))
