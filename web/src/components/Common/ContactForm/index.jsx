import React from 'react'
import PropTypes from 'prop-types'

const ContactForm = props => {
  return (
    <form name='contact' method='POST' data-netlify='true'>
      <p>
        <label>
          Your Name: <input type='text' name='name' />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type='email' name='email' />
        </label>
      </p>
      <p>
        <label>
          Your Role:{' '}
          <select name='role[]' multiple>
            <option value='leader'>Leader</option>
            <option value='follower'>Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name='message' />
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  )
}

ContactForm.propTypes = {}

export default ContactForm
