import React from 'react'
import { string } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import BlockContent from '../../block-content'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Team from 'Common/Team'

import styles from './TeamSection.module.scss'

const TeamSection = ({ team }) => {
  const isDark = useDarkContext()
  const { _rawBody, title } = team
  return (
    <div className={styles.TeamSection}>
      <Container
        className={cn(styles.TeamContainer, isDark && styles.isDark)}
        size='full'
        center
        spacious
        withNavSpace
        as='div'
      >
        <Team {...team} className={styles.Team} />
      </Container>
      <Container
        className={cn(isDark && styles.isDark)}
        size='wide'
        center
        gutter
        spacious
        as='div'
      >
        <Type as='h1' size='displayLarge' className={styles.Title}>
          About {title}
        </Type>
        {_rawBody && <BlockContent blocks={_rawBody} className={styles.Body} />}
      </Container>
    </div>
  )
}

TeamSection.propTypes = {
  title: string
}

export default TeamSection
