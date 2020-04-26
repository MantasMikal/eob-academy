import React from 'react'
import  { string } from 'prop-types'
import { useDarkContext } from 'Context/DarkContext'
import { cn } from 'lib/helpers'

import Icon from 'Primitive/Icon'
import Type from 'Primitive/Type'
import Media from 'Common/Media'
import SmartLink from 'Primitive/SmartLink'
import ButtonStandard from 'Primitive/ButtonStandard'

import styles from './TeamCard.module.scss'


// TODO
// Replace Icon with image if using CMS

const TeamCard = ({ logo, title, description, slug}) => {
  const isDark = useDarkContext()
  return (
    <div className={cn(styles.TeamCard, isDark && styles.isDark)}>
      <Media media={logo} />
      <Type className={styles.Title} size="titleLarge">
        {title}
      </Type>
      <Type className={styles.Description} size="base">
        {description}
      </Type>
      <SmartLink className={styles.MoreBtn} to={`/team/${slug.current}`}>
        <ButtonStandard>
          <Type size='base'>
            READ MORE
          </Type>
        </ButtonStandard>
      </SmartLink>
    </div>
  )
}

TeamCard.propTypes = {
  icon: string,
  title: string,
  description: string
}

export default TeamCard
