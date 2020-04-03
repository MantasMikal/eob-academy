import React from 'react'
import useMedia from 'lib/use-media'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { cn } from 'lib/helpers'
import Icon from 'Primitive/Icon'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './Carousel2.module.scss'



const Carousel2 = props => {
  const isTablet = useMedia('(max-width: 960px)')
  const isPhone = useMedia('(max-width: 600px)')
  const slidesToShow = isTablet ? (isPhone ? 1 : 2) : 3
   
//   function handleClick (e) {
//       console.log(e)
//       e.preventDefault()
//       e.stopPropagation();
      
//   }
  
  return (
    <CarouselProvider
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      totalSlides={props.children.length}
      visibleSlides={slidesToShow}
      isIntrinsicHeight
      className={styles.Carousel}
    >
      <Slider className={styles.Slider} moveThreshold={100}>
        {props.children.map((child, i) => (
          <Slide key={child.key} className={styles.Slide} index={i}>
            {child}
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={cn(styles.Button, styles.Back)}>
        <Icon
          className={styles.ControlIcon}
          type="chevron-left"
          width={30}
          height={20}
          a11yText="Previous Slide"
        />
      </ButtonBack>
      <ButtonNext className={cn(styles.Button, styles.Next)}>
        <Icon
          className={styles.ControlIcon}
          type="chevron-right"
          width={30}
          height={20}
          a11yText="Previous Slide"
        />
      </ButtonNext>
    </CarouselProvider>
  )
}
export default Carousel2
