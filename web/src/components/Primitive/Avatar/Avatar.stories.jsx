import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from '.'

const stories = storiesOf('Core/Avatar', module)

stories.add(
  'Info',
  () => (
    <div>
      <Avatar
        initials="FL"
        name="Firstname Lastname"
        src="https://source.unsplash.com/96x96?face"
        size={96}
      />
      <Avatar
        initials="FL"
        name="Firstname Lastname"
        src="https://source.unsplash.com/96x96?face"
      />
      <Avatar
        initials="FL"
        name="Firstname Lastname"
        src="https://source.unsplash.com/96x96?face"
        size={24}
      />
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        A component to display either an avatar image, initials, or a
        combination of both.
      `
    }
  }
)

stories.add('Default (name on hover)', () => (
  <div>
    <Avatar name="Firstname Lastname" size={96} />
    <Avatar name="Firstname Lastname" />
    <Avatar name="Firstname Lastname" size={24} />
  </div>
))

stories.add('Image', () => (
  <div>
    <Avatar
      name="Firstname Lastname"
      src="https://img.clock.co.uk/96"
      size={96}
    />
    <Avatar name="Firstname Lastname" src="https://img.clock.co.uk/96" />
    <Avatar
      name="Firstname Lastname"
      src="https://img.clock.co.uk/96"
      size={24}
    />
  </div>
))

stories.add('Initials (common length)', () => (
  <div>
    <Avatar initials="FL" name="Firstname Lastname" size={96} />
    <Avatar initials="FL" name="Firstname Lastname" />
    <Avatar initials="FL" name="Firstname Lastname" size={24} />
  </div>
))

stories.add('Initials (uncommon lengths)', () => (
  <div>
    <Avatar initials="A" name="Alpha" />
    <Avatar initials="AB" name="Alpha Bravo" />
    <Avatar initials="ABC" name="Alpha Bravo Charlie" />
    <Avatar initials="ABCD" name="Alpha Bravo Charlie Delta" />
  </div>
))

stories.add('Initials overlaying image', () => (
  <div>
    <Avatar
      initials="FL"
      name="Firstname Lastname"
      src="https://img.clock.co.uk/96"
      size={96}
    />
    <Avatar
      initials="FL"
      name="Firstname Lastname"
      src="https://img.clock.co.uk/96"
    />
    <Avatar
      initials="FL"
      name="Firstname Lastname"
      src="https://img.clock.co.uk/96"
      size={24}
    />
  </div>
))

stories.add('Custom border radius', () => (
  <div>
    <Avatar borderRadius="40%" initials="FL" name="Firstname Lastname" />
    <Avatar borderRadius="0.5em" initials="FL" name="Firstname Lastname" />
    <Avatar borderRadius={4} initials="FL" name="Firstname Lastname" />
  </div>
))

stories.add('Custom styles', () => (
  <div>
    <Avatar
      backgroundColor="#0ff"
      color="#333"
      initials="FL"
      name="Firstname Lastname"
    />
  </div>
))
