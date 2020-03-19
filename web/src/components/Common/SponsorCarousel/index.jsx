import React from 'react'
import { arrayOf, shape, string, object } from 'prop-types'
import NukaCarousel from 'nuka-carousel'

import ButtonBase from 'Primitive/ButtonBase'
import Icon from 'Primitive/Icon'
import SponsorSlide from './SponsorSlide'

import styles from './SponsorCarousel.module.scss'

const SponsorCarousel = ({ sponsors, className }) => (
  <div className={className}>
    <NukaCarousel
      slidesToShow={1}
      cellSpacing={24}
      enableKeyboardControls
      initialSlideHeight={320}
      inirialSlideWidth={850}
      speed={250}
      transitionMode="scroll"
      renderCenterRightControls={({ nextSlide }) => (
        <ButtonBase className={styles.ControlRight} onClick={nextSlide}>
          <Icon
            className={styles.ControlIcon}
            type="chevron-right"
            width={30}
            height={20}
            a11yText="Next slide"
          />
        </ButtonBase>
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <ButtonBase className={styles.ControlLeft} onClick={previousSlide}>
          <Icon
            className={styles.ControlIcon}
            type="chevron-left"
            width={30}
            height={20}
            a11yText="Previous Slide"
          />
        </ButtonBase>
      )}
      // Removes default controls
      renderBottomCenterControls={() => null}
    >
      {sponsors.map(
        sponsor =>
          sponsor.qouteHeading &&
          sponsor.qouteBody && (
            <SponsorSlide
              heading={sponsor.qouteHeading}
              body={sponsor.qouteBody}
              alt={sponsor.image.alt}
              image={sponsor.image.asset.fluid}
              url={sponsor.url}
              key={sponsor._key}
            />
          )
      )}
    </NukaCarousel>
  </div>
)

SponsorCarousel.propTypes = {
  className: string,
  sponsors: arrayOf(
    shape({
      image: object,
      alt: string,
      heading: string,
      body: string,
      url: string
    })
  )
}

export default SponsorCarousel
