import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonBase from '.'

const stories = storiesOf('Core/ButtonBase', module)

stories.add('Info', () => <ButtonBase>Base Button</ButtonBase>, {
  info: {
    inline: true,
    text: `
      A base for building button components, which sets up basic (un)styling,
      along with default options, such as block-level or disabled styling.
    `
  }
})

stories.add('As an anchor', () => <ButtonBase href="#">Anchor</ButtonBase>)

stories.add('As a button', () => (
  <ButtonBase onClick={action('clicked')}>Button</ButtonBase>
))

stories.add('With wrapping text', () => (
  <ButtonBase>
    Text
    <br />
    Wrapping
  </ButtonBase>
))

stories.add('Block (full-width)', () => (
  <ButtonBase block>Block Button</ButtonBase>
))

stories.add('Disabled', () => <ButtonBase disabled>Disabled Button</ButtonBase>)
