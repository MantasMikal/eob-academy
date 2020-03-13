import React from 'react'
import { storiesOf } from '@storybook/react'

import YouTubeEmbed, { YouTubeEmbedFallbackUrl } from '.'

const stories = storiesOf('Core/YouTubeEmbed', module)

stories.add('Info', () => <YouTubeEmbed videoId="ScMzIvxBSi4" />, {
  info: {
    inline: true,
    text: `
      Embeds a YouTube video, with options for common video API preferences.

      To make the video responsive, wrap in in a \`ResponsiveMedia\` component.
    `
  }
})

stories.add('Default state', () => <YouTubeEmbed videoId="ScMzIvxBSi4" />)

stories.add('With start time', () => (
  <YouTubeEmbed videoId="ScMzIvxBSi4" start="20" />
))

stories.add('With hidden controls', () => (
  <YouTubeEmbed videoId="ScMzIvxBSi4" hideControls />
))

stories.add('Fallback URL', () => (
  <a href={YouTubeEmbedFallbackUrl('ScMzIvxBSi4')}>
    {YouTubeEmbedFallbackUrl('ScMzIvxBSi4')}
  </a>
))
