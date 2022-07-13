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

  const styles = {
    ...colTemplate,
    ...rowTemplate,
    ...rowGap,
    ...colGap,
    ...margin,
    marginBottom: '10px'
  }

  const gridComponents = gridMedia.map((item) => {
    return createMedia(item)
  })

  return (
    gridComponents && (
      <div className="grid" style={styles} key={component._key}>
        {gridComponents}
      </div>
    )
  )
}

export default createGrid
