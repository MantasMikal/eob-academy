import React from 'react'
import PropTypes from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Navigation from 'Common/Navigation/Navigation'
import A11yNavigation from 'Primitive/A11yNavigation'
import Type from 'Primitive/Type'

import styles from './Layout.module.scss'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, onToggleDark }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Wrapper, isDark && styles.isDark)}>
      <A11yNavigation>
        <a href="#content">Jump to main content</a>
        <a href="#navigation">Jump to primary navigation</a>
      </A11yNavigation>
      <Navigation
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
        onToggleDark={onToggleDark}
        id="navigation"
      />
      <div className={styles.Content} id="content">
        {children}
      </div>
      <footer className={styles.Footer}>
        <div className={styles.FooterWrapper}>
          <Type size="small" className={styles.SiteInfo}>
            © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a>{' '}
            &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Type>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  onHideNav: PropTypes.func,
  onShowNav: PropTypes.func,
  showNav: PropTypes.bool,
  onToggleDark: PropTypes.func,
  siteTitle: PropTypes.string
}

export default Layout
