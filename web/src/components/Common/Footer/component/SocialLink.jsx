import React from 'react'
import { string } from 'prop-types'

import SmartLink from 'Primitive/SmartLink'
import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'

import { Link } from '../Footer.module.scss'

const SocialLink = ({ url, type, text }) => (
  <SmartLink className={Link} href={url} key={`${type}-icon`}>
    <Icon type={type} width={30} height={30} a11yText={type} />
    <Type as="span" size="base">
      {text}
    </Type>
  </SmartLink>
)

SocialLink.propTypes = {
  type: string,
  text: string,
  url: string
}

export default SocialLink
