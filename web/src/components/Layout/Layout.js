import React from 'react'
import PropTypes, { bool, func } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Navigation from 'Common/Navigation'
import A11yNavigation from 'Primitive/A11yNavigation'
import Footer from 'Common/Footer'
import StrpLine from 'Common/StripLine'

import styles from './Layout.module.scss'

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  onToggleDark,
  sponsors,
  social,
  isStripVisible,
  hideStrip
}) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Wrapper, isDark && styles.isDark)}>
      <A11yNavigation>
        <a href='#content'>Jump to main content</a>
        <a href='#navigation'>Jump to primary navigation</a>
      </A11yNavigation>
      <Navigation
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
        onToggleDark={onToggleDark}
        id='navigation'
      />
      <StrpLine text='We are fully operational working with students online - if the Coronavirus is still affecting our lives past September 2020, all of our new students will have access to tutors and be able to work remotely through our online tools. ' />
      <div className={styles.Content} id='content'>
        {children}
      </div>
      <Footer sponsors={sponsors} social={social} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  onHideNav: PropTypes.func,
  onShowNav: PropTypes.func,
  showNav: PropTypes.bool,
  onToggleDark: PropTypes.func,
  siteTitle: PropTypes.string,
  isStripVisible: bool,
  hideStrip: func
}

export default Layout
