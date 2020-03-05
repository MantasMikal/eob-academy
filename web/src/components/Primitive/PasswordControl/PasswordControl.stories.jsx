import React from 'react'
import { storiesOf } from '@storybook/react'

import PasswordControl from '.'

const stories = storiesOf('Form/PasswordControl', module)

stories.add('Info', () => <PasswordControl name="password" />, {
  info: {
    inline: true,
    text: `
      A wrapper around a TextControl component which adds password visibility
      toggling functionality. When the toggle button is pressed, focus
      immediately returns to the input.
    `
  }
})

stories.add('Password type (default)', () => (
  <PasswordControl name="password" defaultValue="1234" />
))

stories.add('Text type (forced)', () => (
  <PasswordControl name="password" defaultValue="1234" type="text" />
))
