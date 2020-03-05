import React from 'react'
import { storiesOf } from '@storybook/react'

import Ellipsis from './'

const stories = storiesOf('Utility/Ellipsis', module)

stories.add(
  'Info',
  () => (
    <Ellipsis maxWidth="50%">
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a
      pharetra augue.
    </Ellipsis>
  ),
  {
    info: {
      inline: true,
      text: `
        Forces content to a single line, and adds an ellipsis if content extends
        the container bounds.

        Optionally accepts a \`maxWidth\` prop to restrict container width.
      `
    }
  }
)

stories.add('Default state', () => (
  <Ellipsis>
    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
    vestibulum. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
    augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a
    pharetra augue.
  </Ellipsis>
))

stories.add('Restricted width', () => (
  <Ellipsis maxWidth={200}>
    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
    vestibulum. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
    augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a
    pharetra augue.
  </Ellipsis>
))
