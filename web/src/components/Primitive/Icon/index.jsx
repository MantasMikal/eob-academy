import React from 'react'
import { number, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import svgDimensionsFormatter from '../../../lib/svg-dimensions-formatter'
import ratioScaler from '../../../lib/ratio-scaler'

import styles from './Icon.module.scss'

const svgs = require.context('../../../asset/svg/icon/', false, /\.svg$/)

// Exported to allow iteration in storybook
export const vAligns = ['baseline', 'bottom', 'middle', 'top']
export const types = svgs
  .keys()
  .map(key => key.replace(`./`, '').replace(`.svg`, ''))

const Icon = ({ a11yText, className, type, height, width, vAlign }) => {
  const SvgType = svgs(`./${type}.svg`).default

  const targetDimensions = { width, height }
  const nativeDimensions = svgDimensionsFormatter(SvgType)
  const ratioDimensions = ratioScaler(
    targetDimensions,
    nativeDimensions,
    'ceil'
  )

  return (
    <span
      className={classNames(styles.Icon, vAlign && styles[vAlign], className)}
      {...(a11yText && {
        role: 'img',
        'aria-label': a11yText
      })}
      {...(!a11yText && {
        'aria-hidden': 'true'
      })}
      style={{
        width: `${ratioDimensions.width}px`,
        height: `${ratioDimensions.height}px`
      }}
    >
      <SvgType />
    </span>
  )
}

Icon.propTypes = {
  a11yText: string.isRequired,
  className: string,
  type: oneOf(types).isRequired,
  height: number,
  width: number,
  vAlign: oneOf(vAligns)
}

export default Icon
