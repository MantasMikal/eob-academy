import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'Common/Carousel'
import createMedia from './createMedia'

const createSlideshow = node => {
  return <Carousel>{node.slides.map(item => createMedia(item))}</Carousel>
}

createSlideshow.propTypes = {}

export default createSlideshow
