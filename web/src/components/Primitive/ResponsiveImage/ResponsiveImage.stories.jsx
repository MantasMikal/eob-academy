import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveImage from '.'

const stories = storiesOf('Utility/ResponsiveImage', module)

stories.add(
  'Info',
  () => (
    <div style={{ width: '80%', margin: 'auto' }}>
      <ResponsiveImage
        alt=""
        srcSet={[
          {
            width: 400,
            src: 'https://img.clock.co.uk/400x225'
          },
          {
            width: 1600,
            src: 'https://img.clock.co.uk/1600x900'
          }
        ]}
        sizes={['(min-width: 800px) 50vw', '(min-width: 320px) 80vw', '100vw']}
        src="https://img.clock.co.uk/900x450"
      />
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        Responsive image component which allows the browser to display one of
        the supplied images that it thinks best fills the space.

        \`src\`: the fallback image for browsers which don’t have responsive
        image support.

        \`srcSet\`: contains a list of available images, listed with the
        natural width of that image file (in pixels).

        \`sizes\`: explains to the browser how large the image will appear on
        screen at various breakpoints, using a mix of media queries along with
        the approximate size of the image when that media query is active. The
        first matching query is used, so ordering of queries is important.
        Should contain a fallback width as the last value in case none of the
        media queries match.
      `
    }
  }
)

stories.add('Default state', () => (
  <ResponsiveImage
    alt=""
    srcSet={[
      {
        width: 400,
        src: 'https://img.clock.co.uk/400x225'
      },
      {
        width: 800,
        src: 'https://img.clock.co.uk/800x450'
      },
      {
        width: 1280,
        src: 'https://img.clock.co.uk/1280x720'
      },
      {
        width: 1600,
        src: 'https://img.clock.co.uk/1600x900'
      }
    ]}
    sizes={['100vw']}
    src="https://img.clock.co.uk/900x450"
  />
))
