import React from 'react'
import { string } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Type from 'Primitive/Type'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import YoutubeEmbed from './YoutubeEmbed'
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
            <YoutubeEmbed videoId={videoId} width="100%" height="100%" />
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
      console.log(`${videoType} Not supported.`)
      break
  }
}

Video.propTypes = {
  videoType: string,
  videoId: string,
  alt: string
}

export default Video
