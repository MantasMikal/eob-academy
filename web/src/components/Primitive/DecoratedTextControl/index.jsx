import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './DecoratedTextControl.module.scss'

import TextControl from '../TextControl'

const DecoratedTextControlDecoration = ({ children, interactive }) => (
  <div
    className={classNames(
      styles.DecoratedTextControlDecoration,
      interactive && styles.interactive
    )}
  >
    {children}
  </div>
)

DecoratedTextControlDecoration.displayName = 'DecoratedTextControlDecoration'

DecoratedTextControlDecoration.propTypes = {
  interactive: bool,
  children: node.isRequired
}

const DecoratedTextControl = ({
  before,
  beforeInteractive,
  after,
  afterInteractive,
  ...other
}) => (
  <div
    className={classNames(
      styles.DecoratedTextControl,
      before && styles.before,
      after && styles.after
    )}
  >
    {before && (
      <DecoratedTextControlDecoration interactive={beforeInteractive}>
        {before}
      </DecoratedTextControlDecoration>
    )}
    <TextControl {...other} className={styles.DecoratedTextControlControl} />
    {after && (
      <DecoratedTextControlDecoration interactive={afterInteractive}>
        {after}
      </DecoratedTextControlDecoration>
    )}
  </div>
)

DecoratedTextControl.propTypes = {
  before: node,
  beforeInteractive: bool,
  after: node,
  afterInteractive: bool
}

export default DecoratedTextControl
