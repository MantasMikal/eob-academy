import React from 'react'

import createMedia from './createMedia'

export function createGrid(component) {
  const gridMedia = component.gridMedia
  if (!gridMedia) return <> </>

  const colTemplate = {
    gridTemplateColumns: `${
      component.colTemplate || 'repeat(auto-fit, minmax(250px, 1fr)'
    }`
  }

  const rowTemplate = component.rowTemplate && {
    gridTemplateRows: `${component.rowTemplate}`
  }

  const rowGap = {
    gridRowGap: `${component.rowGap || '1em'}`
  }
  const colGap = {
    gridColumnGap: `${component.colGap || '1em'}`
  }
  const margin = component.margin && { margin: component.margin }
  // const centered = component.centered && component.centered

  return (
    <div
      className="grid"
      key={component._key + 'grid'}
      style={{
        ...colTemplate,
        ...rowTemplate,
        ...rowGap,
        ...colGap,
        ...margin,
        marginBottom: '10px'
      }}
    >
      {gridMedia.map((item) => (
        <div className="prose max-w-full !m-0" key={item._key}>
          {createMedia(item)}
        </div>
      ))}
    </div>
  )
}

export default createGrid
