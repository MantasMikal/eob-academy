import React from 'react'
import { storiesOf } from '@storybook/react'

import Navigation from '.'

const stories = storiesOf('Structure/Navigation', module)

stories.add(
  'Info',
  () => (
    <Navigation id="navigation">
      <Navigation.Item to="/1" active>
        One
      </Navigation.Item>
      <Navigation.Item to="/2">Two</Navigation.Item>
      <Navigation.Item to="/3">Three</Navigation.Item>
    </Navigation>
  ),
  {
    info: {
      inline: true,
      text: `
        A simple list of navigation links. Should include an \`id\` that can be
        linked to from an \`A11yNav\` component or similar.
      `
    }
  }
)

stories.add('Default state', () => (
  <Navigation id="navigation">
    <Navigation.Item to="/1" active>
      One
    </Navigation.Item>
    <Navigation.Item to="/2">Two</Navigation.Item>
    <Navigation.Item to="/3">Three</Navigation.Item>
  </Navigation>
))
