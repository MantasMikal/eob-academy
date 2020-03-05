import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from '../../Context/StatusContext'
import SelectControl from '.'

const options = [
  <option value="one" key="1">
    Example One
  </option>,
  <option value="two" key="2">
    Example Two
  </option>,
  <option value="three" key="3">
    Example Three
  </option>,
  <option value="four" key="4">
    Example Four
  </option>
]

const stories = storiesOf('Form/SelectControl', module)

stories.add(
  'Info',
  () => <SelectControl name="exampleSelect">{options}</SelectControl>,
  {
    info: {
      inline: true,
      text: `
        Select dropdown, using custom styling to better match the standard
        text-style control component.

        _Note: some demos do not update when you select as they are presented as
        controlled components, but using dummy onChange functions._
      `
    }
  }
)

stories.add('Default state', () => (
  <SelectControl name="exampleSelect" onChange={() => {}}>
    {options}
  </SelectControl>
))

stories.add('Pre-selected value', () => (
  <SelectControl name="exampleSelect" value="two" onChange={() => {}}>
    {options}
  </SelectControl>
))

stories.add('Text with status (direct)', () => (
  <SelectControl name="exampleSelect" type="text" status="error">
    {options}
  </SelectControl>
))

stories.add('Text with status (via context)', () => (
  <StatusContextProvider status="success">
    <SelectControl name="exampleSelect" type="text">
      {options}
    </SelectControl>
  </StatusContextProvider>
))

stories.add('Multi-select', () => (
  <SelectControl name="exampleSelect" multiple>
    {options}
  </SelectControl>
))

stories.add('Multi-line with custom height (too short)', () => (
  <SelectControl name="exampleSelect" multiple size={2}>
    {options}
  </SelectControl>
))

stories.add('Multi-line with custom height (too tall)', () => (
  <SelectControl name="exampleSelect" multiple size={10}>
    {options}
  </SelectControl>
))

stories.add('Default state - native', () => (
  <SelectControl native name="exampleSelect" onChange={() => {}}>
    {options}
  </SelectControl>
))

stories.add('Text with status (direct) - native', () => (
  <SelectControl native name="exampleSelect" type="text" status="error">
    {options}
  </SelectControl>
))

stories.add('Text with status (via context) - native', () => (
  <StatusContextProvider status="success">
    <SelectControl native name="exampleSelect" type="text">
      {options}
    </SelectControl>
  </StatusContextProvider>
))

stories.add('Multi-select - native', () => (
  <SelectControl native name="exampleSelect" multiple>
    {options}
  </SelectControl>
))

stories.add('Multi-line with custom height (too short) - native', () => (
  <SelectControl native name="exampleSelect" multiple size={2}>
    {options}
  </SelectControl>
))

stories.add('Multi-line with custom height (too tall) - native', () => (
  <SelectControl native name="exampleSelect" multiple size={10}>
    {options}
  </SelectControl>
))
