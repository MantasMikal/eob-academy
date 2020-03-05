import React from 'react'
import { storiesOf } from '@storybook/react'

import Container from '.'

const stories = storiesOf('Core/Container', module)

const content =
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.'

stories.add(
  'Info',
  () => (
    <Container center size="small">
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id
      dolor id nibh ultricies vehicula ut id elit.
    </Container>
  ),
  {
    info: {
      inline: true,
      text: `
        A component used to provide a maximum width for child components.
        Optionally center-aligned, with preset \`size\` values available. Can
        also provide gutter spacing.
      `
    }
  }
)

stories.add('Default state', () => <Container>{content}</Container>)

stories.add('With gutter', () => <Container gutter>{content}</Container>)

stories.add('With with size', () => (
  <Container size="small">{content}</Container>
))

stories.add('With with centring and size', () => (
  <Container center size="small">
    {content}
  </Container>
))
