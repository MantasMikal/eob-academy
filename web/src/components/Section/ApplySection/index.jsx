import React, { useState } from 'react'
import { array, string } from 'prop-types'
import { cn } from 'lib/helpers'
import { useDarkContext } from 'Context/DarkContext'

import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import TextControl from 'Primitive/TextControl'
import FieldTemplate from 'Primitive/FieldTemplate'
import SelectControl from 'Primitive/SelectControl'
import VisuallyHidden from 'Primitive/VisuallyHidden'
import ButtonStandard from 'Primitive/ButtonStandard'
import BlockContent from '../../block-content'

import styles from './ApplySection.module.scss'

const courses = ['Click to pick a course', 'Online', 'College', 'Alternative Provision']

const Index = ({ title, blocks }) => {
  const isDark = useDarkContext()
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   courseOfInterest: '',
  //   message: ''
  // })

  // function validateForm (form) {
  //   return {
  //     name: {
  //       status: form.name.length > 1 ? 'success' : 'error'
  //     },
  //     email: {
  //       status: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
  //         ? 'success'
  //         : 'error'
  //     },
  //     courseOfInterest: {
  //       status: form.courseOfInterest.length > 1 ? 'success' : 'error'
  //     },
  //     message: {
  //       status: form.message.length > 1 ? 'success' : 'error'
  //     }
  //   }
  // }

  return (
    <Container
      className={cn(styles.ApplySection, isDark && styles.isDark)}
      size='wide'
      center
      gutter
      spacious
      withNavSpace
      as='section'
    >
      <Type as='h1' size='displayLarge' className={styles.Title}>
        {title}
      </Type>
      {blocks && (
        <div className={styles.Description}>
          <BlockContent blocks={blocks} />
        </div>
      )}
      <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact' />
        <FieldTemplate label='Your Name' required controlName='name'>
          <TextControl name='name' type='text' required />
        </FieldTemplate>
        <FieldTemplate label='Your email' required controlName='email'>
          <TextControl name='email' type='text' required />
        </FieldTemplate>
        <FieldTemplate
          template='multiText'
          label='Course of interest'
          required
          controlName='courseOfInterest'
        >
          <label>
            <VisuallyHidden>Course of interest</VisuallyHidden>
            <SelectControl name='courseOfInterest'>
              {courses.map(course => (
                <option value={course} key={`course${course}`}>
                  {course}
                </option>
              ))}
            </SelectControl>
          </label>
        </FieldTemplate>
        <FieldTemplate label='Message' status='success' required controlName='message'>
          <TextControl name='message' placeholder='Hi! ...' multiLine rows={10} />
        </FieldTemplate>

        <ButtonStandard className={styles.ApplyButton} type='submit'>
          <Type size='base' demi>
            Apply
          </Type>
        </ButtonStandard>
      </form>
    </Container>
  )
}

Index.propTypes = {
  title: string
}

export default Index
