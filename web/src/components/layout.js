import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './Common/Navigation/Navigation'

// import '../styles/layout.css'
import styles from './layout.module.css'


const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, onToggleDark }) => (
  <>
    <Navigation
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      onToggleDark={onToggleDark}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
  onHideNav: PropTypes.func,
  onShowNav: PropTypes.func,
  showNav: PropTypes.func,
  onToggleDark: PropTypes.func,
  siteTitle: PropTypes.string
}

export default Layout
