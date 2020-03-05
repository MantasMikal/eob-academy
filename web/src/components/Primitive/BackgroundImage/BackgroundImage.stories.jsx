import React from 'react'
import { storiesOf } from '@storybook/react'

import BackgroundImage from '.'

const stories = storiesOf('Core/BackgroundImage', module)

stories.add(
  'Info',
  () => (
    <BackgroundImage
      ratio={9 / 16}
      alt="Random nature image from Unsplash"
      src="https://source.unsplash.com/800x600?nature"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Can be used as a replacement for a regular \`<img />\` component, but
        adds some extra functionality for resizing/scaling. This includes the
        option for the image to grow to fill its parent container.

        As with a regular image, descriptive \`alt\` text is required. This
        should describe the _content of the photo_ as closely as possible, not
        replicate text-based titles, captions or content positioned around the
        image. If the image is used _Purely_ for decoration, a blank string can
        be passed instead.
      `
    }
  }
)

stories.add('Default state', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt="Random nature image from Unsplash"
    ratio={9 / 16}
  />
))

stories.add('Custom position (0 0)', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt="Random nature image from Unsplash"
    ratio={9 / 16}
    position="0 0"
  />
))

stories.add('Custom ratio (3/4)', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt="Random nature image from Unsplash"
    ratio={3 / 4}
  />
))

stories.add('Custom size (200%)', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt="Random nature image from Unsplash"
    ratio={9 / 16}
    size="200%"
  />
))

stories.add('Custom size (contain)', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt="Random nature image from Unsplash"
    ratio={9 / 16}
    size="contain"
  />
))

stories.add('Custom background color', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt="Random nature image from Unsplash"
    ratio={9 / 16}
    size="contain"
    color="#c0ffee"
  />
))

stories.add('Fill container element', () => (
  <div style={{ height: '90vh', width: '90vw' }}>
    <BackgroundImage
      src="https://source.unsplash.com/800x600?nature"
      alt="Random nature image from Unsplash"
      fillContainer
    />
  </div>
))

stories.add('No a11y text', () => (
  <BackgroundImage
    src="https://source.unsplash.com/800x600?nature"
    alt=""
    ratio={9 / 16}
  />
))
