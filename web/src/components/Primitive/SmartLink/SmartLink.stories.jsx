import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SmartLink from './'

const stories = storiesOf('Utility/SmartLink', module)

stories.add('Info', () => <SmartLink>Button</SmartLink>, {
  info: {
    inline: true,
    text: `
      SmartLink can be used in place of any clickable element and will output
      the correct HTML element for the props provided to it.

      At a basic level, it will output:
      - \`<a />\` if passed an \`href\`
      - \`<Link />\` if passed a \`to\` (needs enabling once a router component is enabled)
      - \`<button />\` if passed a \`type\` or \`onClick\`.

      It will also embellish output as required, for example automatically
      adding \`rel="noopener noreferrer"\` to any link with \`target="_blank"\`.
      `
  }
})

stories.add('Default (<button>)', () => <SmartLink>Button</SmartLink>)

stories.add('With button types', () => (
  <>
    <SmartLink type="button">Button (button)</SmartLink>
    <SmartLink type="submit">Button (submit)</SmartLink>
    <SmartLink type="reset">Button (reset)</SmartLink>
  </>
))

stories.add('With anchor element', () => (
  <SmartLink href="https://example.com">Anchor</SmartLink>
))

// stories.add('With Link component', () => (
//   <SmartLink to="/example">“Link” component</SmartLink>
// ))

stories.add('With onClick function', () => (
  <SmartLink onClick={action('clicked')}>Button with onClick</SmartLink>
))

stories.add('With additional attributes', () => (
  <>
    <SmartLink disabled>Button with `disabled`</SmartLink>
    <SmartLink title="example">Button with `title`</SmartLink>
  </>
))
