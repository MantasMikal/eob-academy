import React from 'react'
import { storiesOf } from '@storybook/react'

import VisuallyHidden from '.'

const stories = storiesOf('Utility/VisuallyHidden', module)

stories.add(
  'Info',
  () => <VisuallyHidden>Example hidden content</VisuallyHidden>,
  {
    info: {
      inline: true,
      text: `
        _Note: nothing is visible in the above preview – it’s intentionally
        visually hidden…_

        Hides content using CSS without using \`display: none\`.
        This means screen-readers/bots can still access the content.

        This is useful for adding hidden labels/descriptions to icons or other
        visual elements which might benefit screen-reader users.`
    }
  }
)

stories.add('Default state', () => (
  <VisuallyHidden>Example hidden content</VisuallyHidden>
))
