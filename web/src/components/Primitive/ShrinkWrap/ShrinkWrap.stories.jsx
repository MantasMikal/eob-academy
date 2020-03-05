import React from 'react'
import { storiesOf } from '@storybook/react'

import ShrinkWrap from '.'

const stories = storiesOf('Utility/ShrinkWrap', module)

stories.add(
  'Info',
  () => (
    <ShrinkWrap>
      <ShrinkWrap.Item shrink>
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at
        eros. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
      </ShrinkWrap.Item>
    </ShrinkWrap>
  ),
  {
    info: {
      inline: true,
      text: `
        A component to display items side-by-side, often with one item taking as
        little space as possible and the other filling the remaining space.

        Useful for laying out icons next to text, avatars next to names, inputs
        next to label text, or even for just general horizontal spacing.

        Uses \`display: table;\` for layout, so won’t ever wrap onto a new row.
      `
    }
  }
)

stories.add('Content width (default state)', () => (
  <ShrinkWrap>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <p style={{ background: 'lime' }}>Aenean eu leo quam.</p>
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Full width', () => (
  <ShrinkWrap fullWidth>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <p style={{ background: 'lime' }}>Aenean eu leo quam.</p>
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Vertical-align top', () => (
  <ShrinkWrap vAlign="top">
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Vertical-align middle', () => (
  <ShrinkWrap vAlign="middle">
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Vertical-align bottom', () => (
  <ShrinkWrap vAlign="bottom">
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Multiple items', () => (
  <ShrinkWrap>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Custom wrapping element', () => (
  <ShrinkWrap as="label">
    <ShrinkWrap.Item shrink>
      <input type="checkbox" />
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>I agree to the terms and conditions</ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Fixed (even) spacing', () => (
  <ShrinkWrap fixed fullWidth>
    <ShrinkWrap.Item shrink>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item shrink>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('No wrapping for shrink items', () => (
  <ShrinkWrap fullWidth>
    <ShrinkWrap.Item noWrap>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
      Aenean eu leo
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('Spacing variation (comfortable)', () => (
  <ShrinkWrap spacing="comfortable">
    <ShrinkWrap.Item>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
))

stories.add('General spacing examples', () => (
  <>
    <em>Default state:</em>
    <ShrinkWrap spacing="comfortable">
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
    <hr style={{ margin: '20px 0' }} />
    <em>Full-width, auto layout:</em>
    <ShrinkWrap spacing="comfortable" fullWidth>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
    <hr style={{ margin: '20px 0' }} />
    <em>Full-width, fixed layout:</em>
    <ShrinkWrap spacing="comfortable" fullWidth fixed>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
  </>
))
