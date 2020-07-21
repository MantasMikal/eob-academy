import React from 'react'
import PropTypes from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Map from 'Common/Map'
import Type from 'Primitive/Type'
import ZoomableMedia from 'Common/Zoomable'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'

import styles from './Team.module.scss'

const Team = ({ title, location, email, phone, discord, address, logo, className }) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.Team, isDark && styles.isDark, className)}>
      <TeamDetails
        className={styles.TeamDetails}
        title={title}
        logo={logo}
        address={address}
        email={email}
        discord={discord}
        phone={phone}
      />
      <div className={styles.MapWrapper}>
        <Map locations={[location]} center={location} mapId={`${title}-Map`} />
      </div>
    </div>
  )
}

const TeamDetails = ({ title, logo, address, email, phone, discord, className }) => (
  <div className={cn(styles.TeamDetails, className)}>
    <div className={styles.Logo}>
      <ZoomableMedia media={logo} />
    </div>
    <Type size='titleMedium' className={styles.TeamTitle}>
      {title}
    </Type>
    <Type size='base' className={styles.TeamDescription}>
      {address}
    </Type>
  </div>
)

Team.propTypes = {}

export default Team
