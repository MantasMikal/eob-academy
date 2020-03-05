import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveMedia from './'

const stories = storiesOf('Utility/ResponsiveMedia', module)

stories.add(
  'Info',
  () => (
    <ResponsiveMedia ratio={9 / 16}>
      <img src="http://img.clock.co.uk/800x450?text=16:9%20ratio" alt="" />
    </ResponsiveMedia>
  ),
  {
    info: {
      inline: true,
      text: `
        Reserves a space on page for slow-loading resources, using the
        supplied ratio. Avoids document reflow when child elements load.

        Handles \`<img />\`, \`<video />\` as well as \`<iframe />\` for media
        like embedded videos.
        `
    }
  }
)

stories.add('with image', () => (
  <div style={{ border: '10px solid #aaa' }}>
    <ResponsiveMedia ratio={2 / 4}>
      <img src="http://img.clock.co.uk/1200x600?text=4:2%20ratio" alt="" />
    </ResponsiveMedia>
  </div>
))

stories.add('with video', () => (
  <div style={{ border: '10px solid #aaa' }}>
    <ResponsiveMedia ratio={9 / 16}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        poster="http://img.clock.co.uk/800x450?text=16:9%20ratio"
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      />
    </ResponsiveMedia>
  </div>
))

stories.add('with iframe', () => (
  <div style={{ border: '10px solid #aaa' }}>
    <ResponsiveMedia ratio={9 / 16}>
      <iframe
        title="Example YouTube embed"
        src="https://www.youtube.com/embed/ScMzIvxBSi4?showinfo=0&amp;playsinline=1&amp;rel=0"
        width="500"
        height="281"
        frameBorder="0"
        allowFullScreen=""
      />
    </ResponsiveMedia>
  </div>
))
