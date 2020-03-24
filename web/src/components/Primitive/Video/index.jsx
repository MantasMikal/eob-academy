import React from 'react'
import { string, bool } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import shallowObjectToQuery from 'lib/shallow-object-to-query'
import { cn } from 'lib/helpers'

import Type from 'Primitive/Type'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import YouTubeEmbed from './YouTubeEmbed'
import VimeoEmbed from './VimeoEmbed'

import styles from './Video.module.scss'

const Video = ({ videoType, videoId, caption, className }) => {
  const isDark = useDarkContext()
  const classNames = cn(className, isDark && styles.isDark)

  switch (videoType) {
    case 'youtube':
      return (
        <div className={styles.Video} className={classNames}>
          <ResponsiveMedia ratio={9 / 16}>
            <YouTubeEmbed videoId={videoId} width="100%" height="100%" />
          </ResponsiveMedia>
          {caption && (
            <Type className={styles.Caption} size="base" italic>
              {caption}
            </Type>
          )}
        </div>
      )

    case 'vimeo':
      return (
        <div className={styles.Video} className={classNames}>
          <ResponsiveMedia ratio={9 / 16}>
            <VimeoEmbed videoId={videoId} width="100%" height="100%" />
          </ResponsiveMedia>
          {caption && (
            <Type className={styles.Caption} size="base" italic>
              {caption}
            </Type>
          )}
        </div>
      )

    default:
      console.error(`${videoType} Not supported.`)
      break
  }
}

Video.propTypes = {
  videoType: string,
  videoId: string,
  alt: string
}

export default Video


// Video Types

// # Vimeo


// export const VimeoEmbedFallbackUrl = videoId => `https://vimeo.com/${videoId}`
// export const VimeoEmbed = ({ color, hideByline, hideTitle, start, videoId }) => {
//   const srcPrefix = 'https://player.vimeo.com/video/'
//   const query = {
//     ...(color && { color: color.replace('#', '') }),
//     ...(hideByline && { byline: 0 }),
//     ...(hideTitle && { title: 0 })
//   }
//   const formattedStart = start ? `#t=${start}s` : ``

//   return (
//     <iframe
//       title="Embedded Vimeo video"
//       src={`${srcPrefix}${videoId}?${shallowObjectToQuery(query)}${formattedStart}`}
//       width="560"
//       height="315"
//       frameBorder="0"
//       allowFullScreen
//     />
//   )
// }

// VimeoEmbed.propTypes = {
//   start: string,
//   color: string,
//   hideTitle: bool,
//   hideByline: bool,
//   videoId: string.isRequired
// }

// // # Youtube

// export const YouTubeEmbedFallbackUrl = videoId => `https://www.youtube.com/watch?v=${videoId}`

// export const YouTubeEmbed = ({
//   hideControls,
//   start,
//   videoId,
//   width,
//   height,
//   autoPlay,
//   autoHide,
//   mute,
//   hideInfo
// }) => {
//   const srcPrefix = 'https://www.youtube.com/embed/'
//   const query = {
//     rel: 0, // https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018
//     modestbranding: 1,
//     playsinline: 1,
//     ...(autoHide && { autoHide: 1 }),
//     ...(mute && { mute: 1 }),
//     ...(hideInfo && { showInfo: 0 }),
//     ...(hideControls && { controls: 0 }),
//     ...(autoPlay && { autoPlay: 1 }),
//     ...(start && { start })
//   }

//   return (
//     <iframe
//       title="Embedded YouTube video"
//       src={`${srcPrefix}${videoId}?${shallowObjectToQuery(query)}`}
//       width={width ? width : '560'}
//       height={height ? height : '315'}
//       frameBorder="0"
//       allowFullScreen
//       samesite="None"
//       muted
//       secure='true'
//     />
//   )
// }

// YouTubeEmbed.propTypes = {
//   hideControls: bool,
//   start: string,
//   videoId: string.isRequired,
//   width: string,
//   height: string,
//   autoPlay: bool,
//   autoHide: bool,
//   mute: bool,
//   showInfo: bool
// }
