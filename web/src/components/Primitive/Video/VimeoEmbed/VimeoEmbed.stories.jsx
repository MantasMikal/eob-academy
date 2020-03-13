import React from 'react'
import { storiesOf } from '@storybook/react'

import VimeoEmbed, { VimeoEmbedFallbackUrl } from '.'

const stories = storiesOf('Core/VimeoEmbed', module)

stories.add('Info', () => <VimeoEmbed videoId="22439234" />, {
  info: {
    inline: true,
    text: `
      Embeds a Vimeo video, with options for common video API preferences.

      To make the video responsive, wrap in in a \`ResponsiveMedia\` component.
    `
  }
})

stories.add('Default state', () => <VimeoEmbed videoId="22439234" />)

stories.add('With start time', () => (
  <VimeoEmbed videoId="22439234" start="20" />
))

stories.add('With hidden title', () => (
  <VimeoEmbed videoId="22439234" hideTitle />
))

stories.add('With hidden byline', () => (
  <VimeoEmbed videoId="22439234" hideByline />
))

stories.add('With custom colour', () => (
  <VimeoEmbed videoId="22439234" color="#00ff00" />
))

stories.add('Fallback URL', () => (
  <a href={VimeoEmbedFallbackUrl('22439234')}>
    {VimeoEmbedFallbackUrl('22439234')}
  </a>
))
