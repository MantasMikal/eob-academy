import React from 'react'
import classNames from 'classnames'
import { number, oneOfType, string } from 'prop-types'

import fontSizeFormatter from './lib/font-size-formatter'

import styles from './Avatar.module.scss'

const Avatar = ({
  backgroundColor,
  borderRadius,
  color,
  initials,
  name,
  size,
  src
}) => (
  <div
    className={classNames(styles.Avatar, src && styles.hasImage)}
    style={{
      width: size,
      height: size,
      lineHeight: `${size}px`,
      ...(src && { backgroundImage: `url(${src})` }),
      ...(initials && { fontSize: fontSizeFormatter({ initials, size }) }),
      ...(borderRadius && { borderRadius }),
      ...(backgroundColor && { backgroundColor }),
      ...(color && { color })
    }}
    title={name}
  >
    {initials && <div className={styles.AvatarInitials}>{initials}</div>}
  </div>
)

Avatar.defaultProps = {
  size: 48
}

Avatar.propTypes = {
  backgroundColor: string,
  color: string,
  initials: string,
  name: string.isRequired,
  borderRadius: oneOfType([number, string]),
  size: number,
  src: string
}

export default Avatar
