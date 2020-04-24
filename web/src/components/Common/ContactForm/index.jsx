import React from 'react'
import { useDarkContext } from 'Context/DarkContext'
// import PropTypes from 'prop-types'
import { cn } from 'lib/helpers'
import Container from 'Primitive/Container'
import TextControl from 'Primitive/TextControl'
import FieldTemplate from 'Primitive/FieldTemplate'
import ShrinkWrap from 'Primitive/ShrinkWrap'
import SelectControl from 'Primitive/SelectControl'
import VisuallyHidden from 'Primitive/VisuallyHidden'


import styles from './ContactForm.module.scss'

const ContactForm = props => {
  const isDark = useDarkContext()
  
  return (
    <Container
    className={cn(styles.ContactForm, isDark && styles.isDark)}
    size="wide"
    center
    gutter
    spacious
    withNavSpace
    as="section"
  >

    </Container>
  )
}

ContactForm.propTypes = {}

export default ContactForm
