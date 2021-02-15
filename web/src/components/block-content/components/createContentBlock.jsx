import React from 'react'
import BlockContent from '../index'

const createContentBlock = block => {
  const margin = block.margin ? { margin: `${block.margin}` } : null
  const padding = block.padding ? { padding: `${block.padding}` } : null
  const border = block.border ? { border: `${block.border}` } : null
  const maxWidth = block.maxWidth ? { maxWidth: `${block.maxWidth}` } : null

  const styles = Object.assign({}, padding, margin, border, maxWidth)
  return (
    <div key={block._key} style={styles}>
      <BlockContent blocks={block.contentBlock} />
    </div>
  )
}

export default createContentBlock
