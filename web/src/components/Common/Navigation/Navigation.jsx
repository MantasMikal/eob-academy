import React from 'react'
import { useDarkContext } from '../../Context/DarkContext'
import { cn } from '../../../lib/helpers'

import Icone from '../../icons'
import Type from '../../Primitive/Type'
import Icon from '../../Primitive/Icon'
import VisuallyHidden from '../../Primitive/VisuallyHidden'
import SmartLink from '../../Primitive/SmartLink'
import styles from './Navigation.module.scss'

const LinkWrapper = ({ children, to, className }) => (
  <Type as="li" size="menu" className={className}>
    <SmartLink to={to}>{children}</SmartLink>
  </Type>
)

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, onToggleDark }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Root, isDark && styles.isDark)}>
      <VisuallyHidden>
        <h1>{siteTitle}</h1>
      </VisuallyHidden>
      <div className={styles.Wrapper}>
        <div className={styles.Branding}>
          <SmartLink to="/">
            <Icon className={styles.Logo} type="eob-logo" vAlign="middle" width={40} height={40} />
          </SmartLink>
        </div>
        <button className={styles.ToggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          {showNav ? (
            <Icon type="close" width={24} height={24} />
          ) : (
            <Icon type="burger" width={24} height={24} />
          )}
        </button>
        <nav className={cn(styles.Nav, showNav && styles.showNav)}>
          <ul>
            <LinkWrapper to="/eob-academy/">EOB Academy</LinkWrapper>
            <LinkWrapper to="/princes-trust-courses/">Prince's trust courses</LinkWrapper>
            <LinkWrapper to="/events/">Events</LinkWrapper>
            <LinkWrapper to="/jobs/">Jobs</LinkWrapper>
            <LinkWrapper className={styles.highlight} to="/contact/">
              Contact
            </LinkWrapper>
          </ul>
        </nav>
        <SmartLink className={styles.DarkModeToggle} onClick={onToggleDark}>
          {isDark ? (
            <Icon className={styles.Sun} type="sun" width={24} height={24} />
          ) : (
            <Icon className={styles.Moon} type="moon" width={24} height={24} />
          )}
        </SmartLink>
      </div>
    </div>
  )
}

export default Header
