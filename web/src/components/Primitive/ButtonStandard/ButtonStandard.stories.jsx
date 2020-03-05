import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonStandard from '.'

const stories = storiesOf('Core/ButtonStandard', module)

stories.add('Info', () => <ButtonStandard>Standard Button</ButtonStandard>, {
  info: {
    inline: true,
    text: `
      Basic button component, building on the ButtonBase component.
    `
  }
})

stories.add('As an anchor', () => (
  <ButtonStandard href="#">Anchor</ButtonStandard>
))

stories.add('As a button', () => (
  <ButtonStandard onClick={action('clicked')}>Button</ButtonStandard>
))

stories.add('With wrapping text', () => (
  <ButtonStandard>
    Text
    <br />
    Wrapping
  </ButtonStandard>
))

stories.add('Block (full-width)', () => (
  <ButtonStandard block>Block Button</ButtonStandard>
))

stories.add('Disabled', () => (
  <ButtonStandard disabled>Disabled Button</ButtonStandard>
))
