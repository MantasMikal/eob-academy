import React from 'react'
import PropTypes from 'prop-types'

import SmartLink from 'Primitive/SmartLink'

import styles from './SocialShare.module.scss'

const getLink = (type, url) => {
  switch (type) {
    case 'facebook':
      return `https://facebook.com/sharer/sharer.php?u=${url}`

    case 'twitter':
      return `https://twitter.com/intent/tweet/?&url=${url}&`

    case 'twitter':
      return `https://twitter.com/intent/tweet/?&url=${url}&`

    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
    default:
      break
  }
}

const SocialShare = ({ url, type, children, ...rest }) => {
  return (
    <SmartLink className={styles.SocialShare} href={getLink(type, url)} target="_blank" {...rest}>
      {children}
    </SmartLink>
  )
}

SocialShare.propTypes = {}

export default SocialShare
