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
        <iframe
          src="https://www.youtube.com/embed/7zxEi66DLPs?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1"
          width="100%"
          height="auto"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <img src="/asset/overlay2.svg" className={styles.Overlay} />
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
