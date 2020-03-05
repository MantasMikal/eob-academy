import React from 'react'
import { storiesOf } from '@storybook/react'

import UserSelect from '.'

const stories = storiesOf('Utility/UserSelect', module)

stories.add(
  'Info',
  () => (
    <div style={{ userSelect: 'none' }}>
      Only <UserSelect as="span" text>{`->THIS<-`}</UserSelect> should be
      selectable.
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
          Sets \`user-select\` for child components. Reasons for modifying this
          might include:

          - improving copy/paste experience by making icons/image non-selectable
          - disabling copying of an embed code if providing a copy button
          - enabling selection of voucher code or build number in an app where
            selection is disabled by default
          `
    }
  }
)

stories.add('Default state (auto)', () => (
  <div style={{ userSelect: 'none' }}>
    <UserSelect all>All text should be selectable</UserSelect>
  </div>
))

stories.add('all', () => (
  <div style={{ userSelect: 'none' }}>
    <UserSelect all>All text should be selectable</UserSelect>
  </div>
))

stories.add('text', () => (
  <div style={{ userSelect: 'none' }}>
    Only <UserSelect as="span" text>{`->THIS<-`}</UserSelect> should be
    selectable.
  </div>
))

stories.add('none', () => (
  <div style={{ userSelect: 'all' }}>
    Only <UserSelect as="span" none>{`->THIS<-`}</UserSelect> should be
    un-selectable.
  </div>
))

stories.add('output as custom element', () => (
  <div style={{ userSelect: 'none' }}>
    I’m using an{' '}
    <UserSelect as="em" text>
      &lt;em /&gt;
    </UserSelect>{' '}
    element
  </div>
))
