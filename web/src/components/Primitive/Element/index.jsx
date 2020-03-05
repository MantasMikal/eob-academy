import React from 'react'
import { node, string } from 'prop-types'

const Element = ({ as, ...other }) => {
  const ElementEl = as

  return <ElementEl {...other} />
}

Element.defaultProps = {
  as: 'div'
}

Element.propTypes = {
  children: node.isRequired,
  as: string
}

export default Element
