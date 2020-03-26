import React from 'react'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'

// import './Navigation2.scss'
import styles from './Navigation.module.scss'

const LinkWrapper = ({ children, to, className }) => (
  <SmartLink className={className} to={to}>
    <Type as="span" size="menu">
      {children}
    </Type>
  </SmartLink>
)

const Navigation = ({ onHideNav, onShowNav, showNav, siteTitle, onToggleDark, id }) => {
  const isDark = useDarkContext()
  return (
    <nav className={cn(styles.Root, showNav && styles.Responsive, isDark && styles.isDark)} id={id}>
      <h1 hidden>{siteTitle}</h1>
      <div className={styles.Branding}>
        <SmartLink to="/">
          <img src="/asset/logo.png" className={styles.Logo} />
        </SmartLink>
      </div>
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
      <LinkWrapper className={styles.NavLink} to="/contact/">
        Contact
      </LinkWrapper>
      <LinkWrapper className={styles.NavLink} to="/blog/">
        Blog
      </LinkWrapper>
      <LinkWrapper className={styles.NavLink} to="/jobs/">
        Jobs
      </LinkWrapper>
      <LinkWrapper className={styles.NavLink} to="/gallery/">
        Gallery
      </LinkWrapper>
      <LinkWrapper className={styles.NavLink} to="/events/">
        Events
      </LinkWrapper>
      <div className={styles.Dropdown}>
        <button className={styles.DropdownBtn}>
          <Type as="span" size="menu">
            Courses
          </Type>
        </button>
        <div className={styles.DropdownContent}>
          <LinkWrapper className={styles.NavLink} to="/short-term-courses/">
            Short term
          </LinkWrapper>
          <LinkWrapper className={styles.NavLink} to="/college-courses/">
            College
          </LinkWrapper>
          <LinkWrapper className={styles.NavLink} to="/alternative-schools-courses/">
            Alternative Schools Courses
          </LinkWrapper>
        </div>
      </div>
      <button className={styles.ToggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        {showNav ? (
          <Icon a11yText="Close" type="close" width={24} height={24} />
        ) : (
          <Icon a11yText="Open Menu" type="burger" width={24} height={24} />
        )}
      </button>
    </nav>
  )
}

export default Navigation
