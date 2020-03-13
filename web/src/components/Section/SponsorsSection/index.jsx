import React from 'react'
import { array, string, shape } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import SponsorCarousel from 'Common/SponsorCarousel'
import SponsorGrid from 'Common/SponsorGrid'
import Video from 'Primitive/Video'

import styles from './SponsorsSection.module.scss'

const SponsorsSection = ({ sponsorNodes, title }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Wrapper, isDark && styles.isDark)}>
      <Container size="wide" center gutter spacious>
        <Type size="displayLarge" as="h2" className={styles.Title}>
          {title}
        </Type>
        <Container size="large" center gutter spacious>
          <SponsorCarousel className={styles.SponsorCarousel} sponsors={sponsorNodes.sponsorList} />
          <div className={styles.VideoGrid}>
            {sponsorNodes.videos.map((video, i) => (
              <Video
                videoType={video.videoType}
                videoId={video.videoId}
                alt={video.alt}
                caption={video.caption}
                className={styles.Video}
                key={`${video.videoId}-${i}`}
              />
            ))}
          </div>
          <SponsorGrid className={styles.SponsorGrid} sponsors={sponsorNodes.sponsorList} />
        </Container>
      </Container>
    </div>
  )
}

SponsorsSection.propTypes = {
  sponsorNodes: shape({
    videos: array,
    sponsorList: array
  }),
  title: string
}

export default SponsorsSection
