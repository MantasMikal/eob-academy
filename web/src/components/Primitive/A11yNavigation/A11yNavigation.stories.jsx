import React from 'react'
import { storiesOf } from '@storybook/react'

import A11yNavigation from '.'

const stories = storiesOf('Core/A11yNavigation', module)

stories.add(
  'Info',
  () => (
    <A11yNavigation>
      <a href="#content">Jump to main content</a>
      <a href="#navigation">Jump to primary navigation</a>
    </A11yNavigation>
  ),
  {
    info: {
      inline: true,
      text: `
        Allows users navigating using a keyboard or other assistive technology
        to quickly skip to pre-defined areas of the page. As a minimum, this
        would likely consist of links to the pages main content area, and
        primary site navigation, but may include secondary content or
        navigations as required.

        _Note: A11yNavigation is hidden by default, so click into the preview
        area and press \`TAB\` to view. Additional content is shown in some
        previews to illustrate that links need to have appropriate targets._
      `
    }
  }
)

stories.add('Default state', () => (
  <div className="wrapper">
    <A11yNavigation>
      <a href="#content">Jump to main content</a>
      <a href="#navigation">Jump to primary navigation</a>
    </A11yNavigation>

    <nav id="navigation">
      <a href="/">Link 1</a>
      <a href="/">Link 2</a>
    </nav>

    <main id="content">
      Example content with <a href="/">focusable element</a>
    </main>
  </div>
))
