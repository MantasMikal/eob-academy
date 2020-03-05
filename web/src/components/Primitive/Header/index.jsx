import React, { useState } from 'react'
import { node } from 'prop-types'
import classNames from 'classnames'

import styles from './Header.module.scss'

import Container from '../Container'
import IconButton from '../IconButton'
import SmartLink from '../SmartLink'

const Header = ({ navigation }) => {
  const [isActive, setActive] = useState(false)

  const handleActiveToggle = () => {
    setActive(!isActive)
  }

  return (
    <header role="banner" className={styles.Header}>
      <Container center gutter size="wide">
        <div className={styles.HeaderInner}>
          <div className={styles.HeaderInnerPrimary}>
            <div className={styles.HeaderLogo}>
              <SmartLink to="/">
                <h1>
                  <img
                    src="https://img.clock.co.uk/300x80"
                    alt="Example Name"
                  />
                </h1>
              </SmartLink>
            </div>
          </div>
          <div className={styles.HeaderInnerSecondary}>
            <IconButton
              className={styles.HeaderToggle}
              icon={isActive ? 'close' : 'menu'}
              onClick={handleActiveToggle}
              a11yText={isActive ? 'Hide navigation' : 'Reveal navigation'}
            />
          </div>
        </div>
      </Container>
      <div
        className={classNames(
          styles.HeaderNavigation,
          isActive && styles.isActive
        )}
      >
        {navigation}
      </div>
    </header>
  )
}

Header.propTypes = {
  navigation: node.isRequired
}

export default Header
