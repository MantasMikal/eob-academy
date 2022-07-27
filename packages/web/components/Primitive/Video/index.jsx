import { string } from 'prop-types'
import classNames from 'classnames'
import React from 'react'

import VimeoEmbed from './VimeoEmbed'
import YouTubeEmbed from './YouTubeEmbed'

/**
 * Video embed component wrapper
 */

const Video = ({ videoType, videoId, caption, className, ...other }) => {
  switch (videoType) {
    case 'youtube':
      return (
        <div className={classNames('aspect-video', className)}>
          <YouTubeEmbed
            {...other}
            videoId={videoId}
            width="100%"
            height="100%"
          />

          {caption && <p className="italic pt-1">{caption}</p>}
        </div>
      )

    case 'vimeo':
      return (
        <div className={classNames('aspect-video', className)}>
          <VimeoEmbed {...other} videoId={videoId} width="100%" height="100%" />

          {caption && <p className="italic pt-1">{caption}</p>}
        </div>
      )

    default:
      return <div>Video type is not supported...</div>
  }
}

Video.propTypes = {
  videoType: string,
  videoId: string,
  caption: string,
  alt: string
}

export default Video
