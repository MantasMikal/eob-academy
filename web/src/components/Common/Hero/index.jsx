import React from "react";

import ResponsiveMedia from "Primitive/ResponsiveMedia"
import Type from "Primitive/Type"
import Container from "Primitive/Container"

import styles from "./Hero.module.scss"
import eobHero from "../../../asset/content/eobHero.mp4"

const Hero = ({ video, image, overlay, title, subtitle }) => {
  return (
    <div className={styles.Hero}>
      <ResponsiveMedia ratio={9 / 16}>
      <div className={styles.Overlay} />
      <video
        className={styles.VideoFrame}
        poster={'/asset/eobHero.jpg'}
        autoPlay
        muted
        loop
      >
        <source src={eobHero} type="video/mp4" />
      </video>
  
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
