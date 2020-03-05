import React from 'react'
import { storiesOf } from '@storybook/react'

import Floater from '.'

const stories = storiesOf('Core/Floater', module)

const content = (
  <p>
    Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
    malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
    fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec sed odio dui. Maecenas sed diam eget
    risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
)

stories.add(
  'Info',
  () => (
    <div style={{ overflow: 'auto' }}>
      <Floater size="small" align="left">
        <img src="https://source.unsplash.com/800x600?nature" alt="" />
      </Floater>
      {content}
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper which optionally floats children left/right, with options to
        constrain content width. Useful for floating images/video within article
        text content.
      `
    }
  }
)

stories.add('Aligned left', () => (
  <div style={{ overflow: 'auto' }}>
    <Floater size="small" align="left">
      <img src="https://source.unsplash.com/800x600?nature" alt="" />
    </Floater>
    {content}
    {content}
  </div>
))

stories.add('Aligned right', () => (
  <div style={{ overflow: 'auto' }}>
    <Floater size="small" align="right">
      <img src="https://source.unsplash.com/800x600?nature" alt="" />
    </Floater>
    {content}
    {content}
  </div>
))

stories.add('With set size (no align)', () => (
  <div style={{ overflow: 'auto' }}>
    <Floater size="medium">
      <img src="https://source.unsplash.com/800x600?nature" alt="" />
    </Floater>
    {content}
    {content}
  </div>
))

stories.add('With set size (with align)', () => (
  <div style={{ overflow: 'auto' }}>
    <Floater size="medium" align="left">
      <img src="https://source.unsplash.com/800x600?nature" alt="" />
    </Floater>
    {content}
    {content}
  </div>
))
