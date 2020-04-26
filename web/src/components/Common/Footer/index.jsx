import React from 'react'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import links from './links'

import List from 'Primitive/List'
import SmartLink from 'Primitive/SmartLink'
import SocialLink from './component/SocialLink'
import Container from 'Primitive/Container'
import Seperator from 'Primitive/Seprator'
import Type from 'Primitive/Type'
import SponsorGrid from 'Common/SponsorGrid'

import styles from './Footer.module.scss'

const Footer = ({ sponsors, social }) => {
  const isDark = useDarkContext()
  
  return (
    <div className={cn(styles.Wrapper, isDark && styles.isDark)}>
      <Seperator className={styles.Seperator} />
      {sponsors && <SponsorGrid className={styles.SponsorGrid} sponsors={sponsors} />}
      <footer className={cn(styles.Footer)}>
        <Container gutter center size='wide' className={styles.Container}>
          <div className={styles.Branding}>
            <SmartLink href='/' className={styles.Logo}>
              <img src='/asset/logo.png' alt='EOB Academy' />
            </SmartLink>
            <div className={styles.Social}>
              <SocialLink type='twitter' url={social.twitter} />
              <SocialLink type='facebook-round' url={social.facebook} />
              <SocialLink type='youtube' url={social.youtube} />
              <SocialLink type='instagram' url={social.instagram} />
            </div>
          </div>
          <div className={styles.LinkListWrapper}>
            {links.map((linkList, i) => (
              <List key={i} className={styles.LinkList}>
                {linkList.map((link, j) => (
                  <SmartLink className={styles.Link} key={j} href={link.url}>
                    <Type size='base'>{link.text}</Type>
                  </SmartLink>
                ))}
              </List>
            ))}
          </div>
        </Container>
        <img src='/asset/waves.svg' className={styles.Waves} />
      </footer>
    </div>
  )
}
export default Footer
