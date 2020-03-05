import React from 'react'
import { storiesOf } from '@storybook/react'

import Spinner from '.'

const stories = storiesOf('Core/Spinner', module)

stories.add('Info', () => <Spinner />, {
  info: {
    inline: true,
    text: `
      Simple SVG spinner which can be used to indicate loading.

      If this component appears in the DOM but is not visible, pass the
      \`paused\` prop to remove the performance overhead of the multiple
      animations.
    `
  }
})

stories.add('Default state', () => <Spinner />)

stories.add('Paused', () => <Spinner paused />)

stories.add('Delay before reveal', () => <Spinner revealDelay={2000} />)

stories.add('Custom size', () => <Spinner size={50} />)
