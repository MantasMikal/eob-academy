// import React from 'react'
import validatePropTypes from 'validate-prop-types'
// import { shallow } from 'enzyme'
import StandardMeta from '.'

const requiredProps = () => ({
  description: 'Example description',
  slug: '/article',
  title: 'Example Title'
})

describe('Component: StandardMeta', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(StandardMeta.propTypes, {})
    const expected = {
      description:
        'The prop `description` is marked as required in `Component`, but its value is `undefined`.',
      slug:
        'The prop `slug` is marked as required in `Component`, but its value is `undefined`.',
      title:
        'The prop `title` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(StandardMeta.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test.todo('should have additional tests')
})
