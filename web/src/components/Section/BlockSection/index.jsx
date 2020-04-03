import React from 'react'
import { array, string } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import BlockContent from '../../block-content'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './BlockSection.module.scss'


const Index = ({ blockContent, title }) => {
  const isDark = useDarkContext()
  return (
    <Container
      className={cn(styles.BlockSection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="displayLarge" className={styles.Title}>
        {title}
      </Type>
      <BlockContent blocks={blockContent} />
    </Container>
  )
}

Index.propTypes = {
  blockContent: array,
  title: string
}

export default Index
