import React from 'react'
import { storiesOf } from '@storybook/react'

import DescriptionList from '.'

const stories = storiesOf('Core/DescriptionList', module)

stories.add(
  'Info',
  () => (
    <DescriptionList
      items={{
        Position: 'Prop',
        Age: '27',
        Height: '200cm',
        'Games Played': '41'
      }}
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Accepts an object with a “term” as a key, and “details” as a key/value
        pair. Currently only supports singe term/detail pairs.
      `
    }
  }
)

stories.add('Default state', () => (
  <DescriptionList
    items={{
      Position: 'Prop',
      Age: '27',
      Height: '200cm',
      'Games Played': '41'
    }}
  />
))
