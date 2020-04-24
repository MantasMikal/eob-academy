import React from 'react'
import PropTypes from 'prop-types'
// import overlay from '/'

// TODO
// Fix this
// SEO!

import styles from './Hero.module.scss'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'
import Type from 'Primitive/Type'
import Container from 'Primitive/Container'

const Hero = ({ video, image, overlay, title, subtitle }) => {
  return (
    <div className={styles.Hero}>
      <ResponsiveMedia ratio={9 / 16}>
      <iframe src="https://player.vimeo.com/video/411540773?controls=0&muted=1&autoplay=1" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <div className={styles.Overlay} />
      </ResponsiveMedia>
      <Container size="wide" gutter center className={styles.Content}>
        <Type size="displayHero" as="h2" className={styles.Title}>
          {title}
        </Type>
        <Type size="subtitle" as="p" className={styles.Subtitle}>
          {subtitle}
        </Type>
      </Container>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
