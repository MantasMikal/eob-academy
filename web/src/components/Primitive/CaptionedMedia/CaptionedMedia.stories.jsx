import React from 'react'
import { storiesOf } from '@storybook/react'

import CaptionedMedia from '.'
import ResponsiveImage from '../ResponsiveImage'
import ResponsiveMedia from '../ResponsiveMedia'
import Type from '../Type'

const stories = storiesOf('Core/CaptionedMedia', module)

stories.add(
  'Info',
  () => (
    <CaptionedMedia caption="Example caption to accompany image">
      <img src="https://source.unsplash.com/800x450?nature" alt="" />
    </CaptionedMedia>
  ),
  {
    info: {
      inline: true,
      text: `
        Adds a consistent wrapper for combining various media types with
        a text caption. The content and caption can composed as required (see
        examples).

        If the media element represents “self-contained content”, it can be
        represented as a figure by passing the \`figure\` prop. See
        [MDN’s information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
        for details of recommended usage.
      `
    }
  }
)

stories.add('As inline image', () => (
  <CaptionedMedia
    caption={<Type size="small">Example caption to accompany image</Type>}
  >
    <ResponsiveMedia ratio={9 / 16}>
      <ResponsiveImage
        src="https://source.unsplash.com/800x450?nature"
        alt="Description of visual content"
      />
    </ResponsiveMedia>
  </CaptionedMedia>
))

stories.add('As inline video', () => (
  <CaptionedMedia
    caption={<Type size="small">Example caption to accompany image</Type>}
  >
    <ResponsiveMedia ratio={9 / 16}>
      <video
        muted
        poster="https://img.clock.co.uk/640x360"
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      />
    </ResponsiveMedia>
  </CaptionedMedia>
))

stories.add('As a figure', () => (
  <CaptionedMedia figure caption="Figure 1. Example caption to accompany image">
    <img src="https://source.unsplash.com/800x450?nature" alt="" />
  </CaptionedMedia>
))
