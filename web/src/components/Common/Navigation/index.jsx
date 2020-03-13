import React from 'react'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'
import VisuallyHidden from 'Primitive/VisuallyHidden'
import SmartLink from 'Primitive/SmartLink'

import styles from './Navigation.module.scss'

const LinkWrapper = ({ children, to, className }) => (
  <Type as="li" size="menu" className={className}>
    <SmartLink to={to}>{children}</SmartLink>
  </Type>
)

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, onToggleDark, id }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Root, isDark && styles.isDark)} id={id}>
      <h1 hidden>{siteTitle}</h1>
      <div className={styles.Wrapper}>
        <div className={styles.Branding}>
          <SmartLink to="/">
            <Icon
              a11yText="EOB Logo"
              className={styles.Logo}
              type="eob-logo"
              vAlign="middle"
              width={40}
              height={40}
            />
          </SmartLink>
        </div>
        <button className={styles.ToggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          {showNav ? (
            <Icon a11yText="Close" type="close" width={24} height={24} />
          ) : (
            <Icon a11yText="Open Menu" type="burger" width={24} height={24} />
          )}
        </button>
        <nav className={cn(styles.Nav, showNav && styles.showNav)}>
          <ul>
            <LinkWrapper to="#">EOB Academy</LinkWrapper>
            <LinkWrapper to="#">Prince's trust courses</LinkWrapper>
            <LinkWrapper to="#">Events</LinkWrapper>
            <LinkWrapper to="#">Jobs</LinkWrapper>
            <LinkWrapper className={styles.highlight} to="/contact/">
              Contact
            </LinkWrapper>
          </ul>
        </nav>
        <SmartLink className={styles.DarkModeToggle} onClick={onToggleDark}>
          {isDark ? (
            <Icon
              a11yText="Turn off dark mode"
              className={styles.Sun}
              type="sun"
              width={24}
              height={24}
            />
          ) : (
            <Icon
              a11yText="Turn on dark mode"
              className={styles.Moon}
              type="moon"
              width={24}
              height={24}
            />
          )}
        </SmartLink>
      </div>
    </div>
  )
}

export default Header
