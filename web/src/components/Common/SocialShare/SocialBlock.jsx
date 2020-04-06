import React from 'react'
import PropTypes, { string } from 'prop-types'
import SocialShare from './index'
import Icon from 'Primitive/Icon'
import styles from './SocialShare.module.scss'

const SocialBlock = ({url}) => {
  return (
    <div className={styles.SocialBlock}>
      <SocialShare type="facebook" url={url}>
        <Icon type="facebook-round" className={styles.Facebook} width={30} height={30} />
      </SocialShare>
      <SocialShare type="twitter" url={url}>
        <Icon type="twitter" className={styles.Twitter} width={30} height={30} />
      </SocialShare>
      <SocialShare type="linkedin" url={url}>
        <Icon type="linkedin" className={styles.Linkedin} width={30} height={30} />
      </SocialShare>
    </div>
  )
}

SocialBlock.propTypes = {
  url: string
}

export default SocialBlock
