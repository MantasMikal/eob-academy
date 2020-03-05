import React from 'react'
import { storiesOf } from '@storybook/react'

import ScrollArea from '.'

const stories = storiesOf('Utility/ScrollArea', module)

stories.add(
  'Info',
  () => (
    <div style={{ height: 110 }}>
      <ScrollArea>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
        aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est
        at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean
        eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et.
      </ScrollArea>
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        A scrollable container which takes the dimensions of its parent element
        (fixed-height, or flex-based), ands scrolls its content.

        Has a horizontal variation, as well as an (experimental) prop which
        attempts to visually hide the scrollbar. This is only recommended if
        you are also providing a custom visual indicator of scroll position.
      `
    }
  }
)

stories.add('Vertical scroll (default state)', () => (
  <div style={{ height: 110 }}>
    <ScrollArea>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
      aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
      lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
      leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
      porta sem malesuada magna mollis euismod. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et.
    </ScrollArea>
  </div>
))

stories.add('Vertical hidden scrollbar', () => (
  <div style={{ height: 110 }}>
    <ScrollArea hideScrollbar>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
      aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
      lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
      leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
      porta sem malesuada magna mollis euismod. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et.
    </ScrollArea>
  </div>
))

stories.add('Horizontal scroll', () => (
  <div style={{ height: 110, whiteSpace: 'nowrap' }}>
    <ScrollArea horizontal>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
      aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
      lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
      leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
      porta sem malesuada magna mollis euismod. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et.
    </ScrollArea>
  </div>
))

stories.add('Horizontal hidden scrollbar', () => (
  <div style={{ height: 110, whiteSpace: 'nowrap' }}>
    <ScrollArea horizontal hideScrollbar>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit
      aliquet. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
      lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
      leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
      porta sem malesuada magna mollis euismod. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur et.
    </ScrollArea>
  </div>
))
