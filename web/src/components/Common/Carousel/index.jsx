import React, { useState, useCallback } from 'react'
import Slick from 'react-slick'

import styles from './Carousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// TODO
// Fix triggering click while dragging

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true
}

export const Carousel = ({ children, ...props }) => {
  const [dragging, setDragging] = useState(false)

  const handleBeforeChange = useCallback(() => {
    console.log('handleBeforeChange')
    setDragging(true)
  }, [setDragging])

  const handleAfterChange = useCallback(() => {
    console.log('handleAfterChange')
    setDragging(false)
  }, [setDragging])

  const handleOnItemClick = useCallback(
    e => {
      console.log('handleOnItemClick')
      if (dragging) e.stopPropagation()
    },
    [dragging]
  )

  return (
    <Slick
      beforeChange={handleBeforeChange}
      afterChange={handleAfterChange}
      {...props}
      {...settings}
      className={styles.overflow}
    >
      {React.Children.map(children, child => (
        <div className={styles.Slide} onClickCapture={handleOnItemClick}>
          {child}
        </div>
      ))}
    </Slick>
  )
}
Carousel.defaultProps = {}

Carousel.propTypes = {}

export default Carousel
