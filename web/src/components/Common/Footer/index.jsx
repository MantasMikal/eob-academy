import React from 'react'
import PropTypes from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import List from 'Primitive/List'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'
import SocialLink from './component/SocialLink'
import Container from 'Primitive/Container'
import Seperator from 'Primitive/Seprator'
import Type from 'Primitive/Type'

import styles from './Footer.module.scss'

import links from './links'

const Footer = () => {
  const isDark = useDarkContext()
  return (
    <>
      <Seperator />
      <footer className={cn(styles.Footer, isDark && styles.isDark)}>
        <Container gutter center size="wide" className={styles.Container}>
          <div className={styles.Branding}>
            <SmartLink href="/">
              <Icon
                a11yText="EOB Logo"
                className={styles.Logo}
                type="eob-logo"
                vAlign="middle"
                width={200}
                height={200}
              />
            </SmartLink>
            <div className={styles.Social}>
              <SocialLink type="twitter" text="Follow us @eobacademy" url="#" />
              <SocialLink type="facebook-round" text="Find us" url="#" />
            </div>
          </div>
          <div className={styles.LinkListWrapper}>
            {links.map((linkList, i) => (
              <List key={i} className={styles.LinkList}>
                {linkList.map((link, j) => (
                  <SmartLink className={styles.Link} key={j} href={link.url}>
                    <Type size="base">{link.text}</Type>
                  </SmartLink>
                ))}
              </List>
            ))}
          </div>
        </Container>
        <img src="/asset/waves.svg" className={styles.Waves} />
      </footer>
    </>
  )
}

Footer.propTypes = {}

export default Footer