import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'

import Navigation from '../Navigation'

const navigation = (
  <Navigation id="navigation">
    <Navigation.Item to="/1" active>
      One
    </Navigation.Item>
    <Navigation.Item to="/2">Two</Navigation.Item>
    <Navigation.Item to="/3">Three</Navigation.Item>
  </Navigation>
)

const stories = storiesOf('Structure/Header', module)

stories.add('Info', () => <Header navigation={navigation} />, {
  info: {
    inline: true,
    text: `
      Basic site-level header component with mobile navigation toggle. Accepts a
      navigation component as a prop.
    `
  }
})

stories.add('Default state', () => <Header navigation={navigation} />)
