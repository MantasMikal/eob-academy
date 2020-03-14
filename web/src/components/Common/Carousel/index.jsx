import React from 'react'
import NukaCarousel from 'nuka-carousel'
import useMedia from 'lib/use-media'

import ButtonBase from 'Primitive/ButtonBase'
import Icon from 'Primitive/Icon'

import styles from './Carousel.module.scss'

function Carousel({ children }) {
  const isTablet = useMedia('(max-width: 960px)')
  const isPhone = useMedia('(max-width: 600px)')
  const slidesToShow = isTablet ? (isPhone ? 1 : 2) : 3

  return (
    <div className={styles.Root}>
      <NukaCarousel
        slidesToShow={slidesToShow}
        cellSpacing={24}
        enableKeyboardControls
        frameOverflow="visible"
        initialSlideHeight={450}
        inirialSlideWidth={450}
        speed={250}
        transitionMode="scroll"
        renderBottomRightControls={({ nextSlide }) => (
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
        renderBottomLeftControls={({ previousSlide }) => (
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
        renderCenterRightControls={() => null}
        renderCenterLeftControls={() => null}
      >
        {children}
      </NukaCarousel>
    </div>
  )
}

Carousel.propTypes = {}

export default Carousel
