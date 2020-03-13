import React from 'react'
import { bool, string } from 'prop-types'

import shallowObjectToQuery from 'lib/shallow-object-to-query'

export const YouTubeEmbedFallbackUrl = videoId =>
  `https://www.youtube.com/watch?v=${videoId}`

const YouTubeEmbed = ({ hideControls, start, videoId, width, height, autoPlay, autoHide, mute, hideInfo }) => {
  const srcPrefix = 'https://www.youtube.com/embed/'
  const query = {
    rel: 0, // https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018
    modestbranding: 1,
    playsinline: 1,
    ...(autoHide && { autoHide: 1 }),
    ...(mute && { mute: 1 }),
    ...(hideInfo && { showInfo: 0 }),
    ...(hideControls && { controls: 0 }),
    ...(autoPlay && { autoPlay: 1, }),
    ...(start && { start })
  }

  return (
    <iframe
      title="Embedded YouTube video"
      src={`${srcPrefix}${videoId}?${shallowObjectToQuery(query)}`}
      width={width ? width : "560"}
      height={height ? height : "315"}
      frameBorder="0"
      allowFullScreen
      SameSite='None'
      Secure
    />
  )
}

YouTubeEmbed.propTypes = {
  hideControls: bool,
  start: string,
  videoId: string.isRequired,
  width: string,
  height: string,
  autoPlay: bool,
  autoHide: bool,
  mute: bool,
  showInfo: bool
}

export default YouTubeEmbed
