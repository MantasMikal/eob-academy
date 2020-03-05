import React from 'react'
import { storiesOf } from '@storybook/react'

import FieldTemplate from './'
import TextControl from '../TextControl'
import CheckControlGroup from '../CheckControlGroup'
import CheckControl from '../CheckControl'

import VisuallyHidden from '../VisuallyHidden'
import SelectControl from '../SelectControl'
import ShrinkWrap from '../ShrinkWrap'

const days = [...Array(31).keys()].map(i => `${i + 1}`)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const year = new Date().getFullYear()
const years = []
for (var i = 0; i <= 10; ++i) years.push(`${year - i}`)

const stories = storiesOf('Form/FieldTemplate', module)

stories.add(
  'Info',
  () => (
    <FieldTemplate
      label="Example text question"
      status="success"
      required
      feedback="Good answer"
      controlName="exampleText"
    >
      <TextControl
        name="exampleText"
        type="text"
        placeholder="Example placeholder"
        required
      />
    </FieldTemplate>
  ),
  {
    info: {
      inline: true,
      text: `
        Pre-configured combinations of Field components which cover most
        common use cases
      `
    }
  }
)

stories.add('Text template (default)', () => (
  <FieldTemplate
    label="Example text question"
    status="success"
    required
    feedback="Good answer"
    controlName="exampleText"
  >
    <TextControl
      name="exampleText"
      type="text"
      placeholder="Example placeholder"
      required
    />
  </FieldTemplate>
))

stories.add('Text template with hidden label', () => (
  <FieldTemplate
    hideLabel
    label="Example text question"
    status="success"
    required
    feedback="Good answer"
    controlName="exampleText"
  >
    <TextControl
      name="exampleText"
      type="text"
      placeholder="Example placeholder"
      required
    />
  </FieldTemplate>
))

stories.add('Check template', () => (
  <FieldTemplate
    template="check"
    label="Example check question"
    assistance="Example assistance text"
    status="error"
    feedback="Please select at least one option"
    controlName="checkboxExample"
  >
    <CheckControlGroup a11yLabel="Example checkboxes">
      <CheckControl type="checkbox" name="checkboxExample" value="1">
        Option one
      </CheckControl>
      <CheckControl type="checkbox" name="checkboxExample" value="2">
        Option two
      </CheckControl>
      <CheckControl type="checkbox" name="checkboxExample" value="3">
        Option three
      </CheckControl>
    </CheckControlGroup>
  </FieldTemplate>
))

stories.add('Check template with hidden label', () => (
  <FieldTemplate
    hideLabel
    template="check"
    label="Example check question"
    assistance="Example assistance text"
    status="error"
    feedback="Please select at least one option"
    controlName="checkboxExample"
  >
    <CheckControl type="checkbox" name="checkboxExample" value="1">
      Option one
    </CheckControl>
  </FieldTemplate>
))

stories.add('Multi-text template (even width)', () => (
  <FieldTemplate
    template="multiText"
    label="Example multi-text question"
    required
    controlName="exampleText"
  >
    <ShrinkWrap fullWidth>
      <ShrinkWrap.Item shrink>
        <label>
          <VisuallyHidden>Day</VisuallyHidden>
          <SelectControl name="day" required>
            <option value="">Day</option>
            {days.map(day => (
              <option value={day} key={`day${day}`}>
                {day}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item shrink>
        <label>
          <VisuallyHidden>Month</VisuallyHidden>
          <SelectControl name="month" required>
            <option value="">Month</option>
            {months.map(month => (
              <option value={month} key={`month${month}`}>
                {month}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item shrink>
        <label>
          <VisuallyHidden>Year</VisuallyHidden>
          <SelectControl name="year" required>
            <option value="">Year</option>
            {years.map(year => (
              <option value={year} key={`year${year}`}>
                {year}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
    </ShrinkWrap>
  </FieldTemplate>
))

stories.add('Multi-text template (auto width)', () => (
  <FieldTemplate
    template="multiText"
    label="Example multi-text question"
    status="success"
    required
    feedback="Good answer"
    controlName="exampleText"
  >
    <ShrinkWrap fullWidth>
      <ShrinkWrap.Item>
        <label>
          <VisuallyHidden>Day</VisuallyHidden>
          <SelectControl name="day">
            {days.map(day => (
              <option value={day} key={`day${day}`}>
                {day}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        <label>
          <VisuallyHidden>Month</VisuallyHidden>
          <SelectControl name="month">
            {months.map(month => (
              <option value={month} key={`month${month}`}>
                {month}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        <label>
          <VisuallyHidden>Year</VisuallyHidden>
          <SelectControl name="year">
            {years.map(year => (
              <option value={year} key={`year${year}`}>
                {year}
              </option>
            ))}
          </SelectControl>
        </label>
      </ShrinkWrap.Item>
    </ShrinkWrap>
  </FieldTemplate>
))
