import React from 'react'
import { node } from 'prop-types'
import { storiesOf } from '@storybook/react'

import Spacer from '.'

const ContentTile = ({ children }) => (
  <div
    style={{
      backgroundColor: 'lightblue',
      height: '80px',
      // width: '140px',
      borderRadius: '5px',
      lineHeight: '16px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
)

ContentTile.propTypes = {
  children: node
}

const stories = storiesOf('Utility/Spacer', module)

stories.add(
  'Info',
  () => (
    <Spacer px={2} pt={1} pb="5px" style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which can be used to provide margin or padding where
        required.

        Values passed as numbers will be multiplied by the project’s default
        spacing unit to allow for easy consistency. Values passed as strings
        will be output without modification.
      `
    }
  }
)

stories.add('Margin: 2x spacing unit', () => (
  <div>
    <Spacer m={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
))

stories.add('Padding: 2x spacing unit', () => (
  <div>
    <Spacer p={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
))

stories.add('As a custom element', () => (
  <div>
    <Spacer as="header" p={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
))
