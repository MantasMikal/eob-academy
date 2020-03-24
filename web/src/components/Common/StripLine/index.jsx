import React from 'react'
import { string, bool } from 'prop-types'
import Type from 'Primitive/Type'

import styles from './StripLine.module.scss'
import Icon from 'Primitive/Icon'
import ButtonStandard from 'Primitive/ButtonStandard'
import { cn } from 'lib/helpers'

const StripLine = ({ text, isVisible, hideStrip }) => (
  <div className={cn(styles.StripLine, !isVisible ? styles.hidden : styles.visible)}>
    <Icon type="info" width={50} height={50} className={styles.Icon} />
    <Type size="title" as="h3" className={styles.Text}>
      {text}
    </Type>
    <ButtonStandard onClick={hideStrip} className={styles.Button}>
      <Type size="base" bold>
        OK
      </Type>
    </ButtonStandard>
  </div>
)

StripLine.propTypes = {
  text: string,
  isVisible: bool
}

export default StripLine
