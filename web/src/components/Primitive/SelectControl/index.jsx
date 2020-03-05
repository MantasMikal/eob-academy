import React from 'react'
import { bool } from 'prop-types'

import CustomSelectControl from './CustomSelectControl'
import NativeSelectControl from './NativeSelectControl'

const SelectControl = ({ native, ...controlProps }) => {
  const SelectControlType = native ? NativeSelectControl : CustomSelectControl

  return <SelectControlType {...controlProps} />
}

SelectControl.propTypes = {
  native: bool
}

export default SelectControl
