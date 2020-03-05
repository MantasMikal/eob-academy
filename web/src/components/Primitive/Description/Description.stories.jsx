import React from 'react'
import { storiesOf } from '@storybook/react'

import Description from '.'

const stories = storiesOf('Core/Description', module)

stories.add(
  'Info',
  () => (
    <Description icon="_placeholder" term="Start time">
      Sunday 25th May, 13:00
    </Description>
  ),
  {
    info: {
      inline: true,
      text: `
        A single item with description title and description definition.
      `
    }
  }
)

stories.add('Default state', () => (
  <Description term="Start time">Sunday 25th May, 13:00</Description>
))

stories.add('With Icon', () => (
  <Description icon="_placeholder" term="Start time">
    Sunday 25th May, 13:00
  </Description>
))
