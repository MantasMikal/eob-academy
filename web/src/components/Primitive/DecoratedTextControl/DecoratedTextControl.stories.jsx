import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DecoratedTextControl from '.'
import Icon from '../Icon'

const stories = storiesOf('Form/DecoratedTextControl', module)

stories.add(
  'Info',
  () => (
    <DecoratedTextControl
      name="exampleText"
      type="text"
      placeholder="Example placeholder"
      before={<Icon type="_placeholder" a11yText="placeholder icon" />}
      after={<Icon type="_placeholder" a11yText="placeholder icon" />}
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Adds icons or buttons before and/or after input content.

        By default, pointer events are disabled on the additional content, to
        allow clicks to pass through to the input below. If the additional
        content is interactive, additional props need to be passed.
      `
    }
  }
)

stories.add('With decorations (non-interactive)', () => (
  <DecoratedTextControl
    name="exampleText"
    type="text"
    placeholder="Example placeholder"
    before={<Icon type="_placeholder" a11yText="placeholder icon" />}
    after={<Icon type="_placeholder" a11yText="placeholder icon" />}
  />
))

stories.add('With decorations (interactive)', () => (
  <DecoratedTextControl
    name="exampleText"
    type="text"
    placeholder="Example placeholder"
    before={
      <button onClick={action('button-click')}>
        <Icon type="_placeholder" a11yText="placeholder icon" />
      </button>
    }
    beforeInteractive
    after={
      <button onClick={action('button-click')}>
        <Icon type="_placeholder" a11yText="placeholder icon" />
      </button>
    }
    afterInteractive
  />
))
