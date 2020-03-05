import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from '.'

const stories = storiesOf('Structure/Footer', module)

stories.add('Info', () => <Footer />, {
  info: {
    inline: true,
    text: `
      Basic site-level footer component.
    `
  }
})

stories.add('Default state', () => <Footer />)
