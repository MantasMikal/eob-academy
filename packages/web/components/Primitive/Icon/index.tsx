import { number, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import ratioScaler from '@/lib/ratio-scaler'
import React from 'react'
import svgDimensionsFormatter from '@/lib/svg-dimensions-formatter'

// import styles from './Icon.module.scss'

const svgs = require.context(
  '../../../assets/svg/icons/',
  false,
  /\.svg$/,
  'weak'
)

export const types = svgs
  .keys()
  .map((key) => key.replace(`./`, '').replace(`.svg`, ''))

// Exported to allow iteration in storybook
export const vAligns = ['baseline', 'bottom', 'middle', 'top'] as const

type Props = {
  type: string
  width?: number
  height?: number
  a11yText?: string
  vAlign?: (typeof vAligns)[number]
  className?: string
}

const Icon: React.FC<Props> = ({
  a11yText,
  className,
  type,
  height,
  width,
  vAlign = 'baseline'
}) => {
  const SvgType = dynamic(async () => {
    const Type = (await import(`@/assets/svg/icons/${type}.svg`)).default

    const targetDimensions = { width, height }
    const nativeDimensions = svgDimensionsFormatter(Type)
    const ratioDimensions = ratioScaler(targetDimensions, nativeDimensions)

    return () => (
      <span
        className={classNames(`inline-block align-${vAlign}`, className)}
        role="img"
        {...(a11yText && {
          'aria-label': a11yText
        })}
        {...(!a11yText && {
          'aria-hidden': 'true'
        })}
        style={{
          width: `${ratioDimensions.width}px`,
          lineHeight: `${ratioDimensions.height}px`,
          height: `${ratioDimensions.height}px`
        }}
      >
        <Type className="align-bottom h-auto fill-current w-[inherit]" />
      </span>
    )
  })

  return <SvgType />
}

Icon.propTypes = {
  a11yText: string.isRequired,
  className: string,
  type: oneOf(types).isRequired,
  height: number,
  width: number,
  vAlign: oneOf(vAligns)
}

export default React.memo(Icon)
