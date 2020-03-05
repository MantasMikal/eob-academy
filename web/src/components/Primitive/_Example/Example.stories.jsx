import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '.'

const stories = storiesOf('Unsorted/Example', module)

stories.add('Info', () => <Example>Content</Example>, {
  info: {
    inline: true,
    text: `
      Starter component which can be duplicated and used as a starting point
      for others.

      Use this first story to add documentation and show off the most
      interesting/useful component iteration. Use subsequent stories to detail
      all component permutations.
    `
  }
})

stories.add('Default state', () => <Example>Content</Example>)
