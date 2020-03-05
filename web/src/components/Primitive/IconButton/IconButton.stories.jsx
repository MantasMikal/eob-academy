import React from 'react'
import { storiesOf } from '@storybook/react'

import IconButton from '.'

const stories = storiesOf('Core/IconButton', module)

stories.add(
  'Info',
  () => (
    <IconButton type="button" icon="_placeholder" a11yText="Placeholder icon" />
  ),
  {
    info: {
      inline: true,
      text: `
        A simple button component used to present clickable Icons
      `
    }
  }
)

stories.add('Default state', () => (
  <IconButton type="button" icon="_placeholder" a11yText="Placeholder icon" />
))

stories.add('Solid colour', () => (
  <IconButton
    type="button"
    icon="_placeholder"
    a11yText="Placeholder icon"
    solid
  />
))

stories.add('Rounded', () => (
  <IconButton
    type="button"
    icon="_placeholder"
    a11yText="Placeholder icon"
    solid
    rounded
  />
))

stories.add('Small', () => (
  <IconButton
    type="button"
    icon="_placeholder"
    a11yText="Placeholder icon"
    small
  />
))

stories.add('With additional content', () => (
  <IconButton type="button" icon="_placeholder" a11yText="" small transparent>
    Example content
  </IconButton>
))

stories.add('Custom icon size', () => (
  <IconButton
    type="button"
    icon="_placeholder"
    a11yText="Placeholder icon"
    iconWidth={16}
    solid
  />
))

stories.add('With increased hit-area', () => (
  <IconButton
    type="button"
    icon="_placeholder"
    a11yText="Placeholder icon"
    increaseHitArea
    small
  />
))
