import React from 'react'

import createMedia from './createMedia'

export function createGrid(component) {
  const gridMedia = component.gridMedia
  if (!gridMedia) return <> </>

  const colTemplate = component.colTemplate && {
    gridTemplateColumns: `${component.colTemplate}`
  }

  const rowTemplate = component.rowTemplate && {
    gridTemplateRows: `${component.rowTemplate}`
  }

  const rowGap = component.rowGap && { gridRowGap: `${component.rowGap}` }
  const colGap = component.colGap && { gridColumnGap: `${component.colGap}` }
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
