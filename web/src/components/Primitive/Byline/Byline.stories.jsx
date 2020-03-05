import React from 'react'
import { storiesOf } from '@storybook/react'

import Byline from '.'

const stories = storiesOf('Core/Byline', module)

stories.add(
  'Info',
  () => (
    <Byline
      author="Firstname Lastname"
      displayDate="1 Jan 2020"
      timestamp="2020-01-01T00:00:00Z"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Displays a combination of Author and Date, with customisable separator
        string.
      `
    }
  }
)

stories.add('Default state', () => (
  <Byline
    author="Firstname Lastname"
    displayDate="1 Jan 2020"
    timestamp="2020-01-01T00:00:00Z"
  />
))

stories.add('Author only', () => <Byline author="Firstname Lastname" />)

stories.add('Author as a link', () => (
  <Byline author={<a href="/author-slug">Firstname Lastname</a>} />
))

stories.add('Display date only', () => <Byline displayDate="1 Jan 2020" />)

stories.add('Date with timestamp', () => (
  <Byline displayDate="1 Jan 2020" timestamp="2020-01-01T00:00:00Z" />
))

stories.add('Custom separator', () => (
  <Byline
    author="Firstname Lastname"
    displayDate="1 Jan 2020"
    timestamp="2020-01-01T00:00:00Z"
    separator=" • "
  />
))
