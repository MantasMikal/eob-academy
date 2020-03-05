import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { StatusContextProvider } from '../../Context/StatusContext'

import Notification from '.'
import Icon from '../Icon'

const stories = storiesOf('Core/Notification', module)

stories.add(
  'Info',
  () => (
    <Notification status="success" onDismiss={action('Dismiss')}>
      Content
    </Notification>
  ),
  {
    info: {
      inline: true,
      text: `
        A status-ready notification component. If passed an onDismiss function,
        a close button is added to the right-hand side.
      `
    }
  }
)

stories.add('Default state', () => <Notification>Content</Notification>)

stories.add('With Icon', () => (
  <Notification>
    <Icon type="_placeholder" a11yText="Placeholder" /> Content
  </Notification>
))

stories.add('With long content', () => (
  <Notification>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
    lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis
    dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </Notification>
))

stories.add('Dismiss button', () => (
  <StatusContextProvider status="error">
    <Notification onDismiss={action('Dismiss')}>Content</Notification>
  </StatusContextProvider>
))

stories.add('Status text (direct)', () => (
  <Notification status="notice">Content</Notification>
))

stories.add('Status text (via context)', () => (
  <StatusContextProvider status="error">
    <Notification>Content</Notification>
  </StatusContextProvider>
))
