import React from 'react'
import { storiesOf } from '@storybook/react'

import TextAlign from '.'

const stories = storiesOf('Utility/TextAlign', module)

stories.add(
  'Info',
  () => <TextAlign center>Example text, center-aligned</TextAlign>,
  {
    info: {
      inline: true,
      text: `
        Sets the text-alignment of child components`
    }
  }
)

stories.add('Aligned center', () => (
  <TextAlign center>Example text, center-aligned</TextAlign>
))

stories.add('Aligned justified', () => (
  <TextAlign justify>
    Example text, justified. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Qui delectus voluptas perspiciatis quod sequi? Necessitatibus eaque
    tempora, odit est, atque voluptate minus magni ullam assumenda dolor
    laudantium eveniet similique sapiente!
  </TextAlign>
))

stories.add('Aligned left', () => (
  <TextAlign left>Example text, left-aligned</TextAlign>
))

stories.add('Aligned right', () => (
  <TextAlign right>Example text, right-aligned</TextAlign>
))
