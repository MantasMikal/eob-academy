import React from 'react'
import { storiesOf } from '@storybook/react'

import CheckControlGroup from '.'
import CheckControl from '../CheckControl'

const stories = storiesOf('Form/CheckControlGroup', module)

stories.add(
  'Info',
  () => (
    <CheckControlGroup a11yLabel="Favourite colour">
      <CheckControl type="radio" name="radioExample" value="1">
        Red
      </CheckControl>
      <CheckControl type="radio" name="radioExample" value="2">
        Green
      </CheckControl>
      <CheckControl type="radio" name="radioExample" value="3">
        Blue
      </CheckControl>
    </CheckControlGroup>
  ),
  {
    info: {
      inline: true,
      text: `
        Used to group multiple related checkbox/radio controls. Adds spacing
        between items, but more importantly aids accessibility by adding a title
        for the group.
      `
    }
  }
)

stories.add('With checkbox controls', () => (
  <CheckControlGroup a11yLabel="Example checkboxes">
    <CheckControl type="checkbox" name="checkboxExample" value="1">
      Option one
    </CheckControl>
    <CheckControl type="checkbox" name="checkboxExample" value="2">
      Option one
    </CheckControl>
    <CheckControl type="checkbox" name="checkboxExample" value="3">
      Option one
    </CheckControl>
  </CheckControlGroup>
))

stories.add('With radio controls', () => (
  <CheckControlGroup a11yLabel="Example radios">
    <CheckControl type="radio" name="radioExample" value="1">
      Option one
    </CheckControl>
    <CheckControl type="radio" name="radioExample" value="2">
      Option one
    </CheckControl>
    <CheckControl type="radio" name="radioExample" value="3">
      Option one
    </CheckControl>
  </CheckControlGroup>
))
