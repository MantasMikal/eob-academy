import React from 'react'
import { bool, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './BackgroundImage.module.scss'

const BackgroundImage = ({
  alt,
  color,
  fillContainer,
  position,
  ratio,
  size,
  src
}) => {
  const formattedRatio = parseFloat((ratio * 100).toFixed(5))

  return (
    <div
      className={classNames(
        styles.BackgroundImage,
        fillContainer && styles.fillContainer
      )}
      style={{
        backgroundImage: `url(${src})`,
        ...(color && { backgroundColor: color }),
        ...(position && { backgroundPosition: position }),
        ...(ratio && { paddingBottom: `${formattedRatio}%` }),
        ...(size && { backgroundSize: size })
      }}
      {...(alt !== '' && {
        role: 'img',
        'aria-label': alt
      })}
    />
  )
}

BackgroundImage.propTypes = {
  alt: string.isRequired,
  color: string,
  fillContainer: bool,
  position: string,
  ratio: number,
  size: string,
  src: string.isRequired
}

export default BackgroundImage
