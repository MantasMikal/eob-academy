import React from 'react'

import createMedia from './createMedia'

export function createGrid(component) {
  const gridMedia = component.gridMedia
  if (!gridMedia) return <> </>

  const styles = {
    gridTemplateColumns: `${component.colTemplate || '1fr 1fr'}`,
    gridTemplateRows: `${component.rowTemplate}`,
    gridRowGap: `${component.rowGap || '1em'}`,
    gridColumnGap: `${component.colGap || '1em'}`,
    margin: component.margin,
    marginBottom: '10px'
  }

  return (
    <div className="grid max-sm:!grid-cols-1" key={component._key + 'grid'} style={styles}>
      {gridMedia.map((item) => (
        <div className="prose max-w-full !m-0" key={item._key}>
          {createMedia(item)}
        </div>
      ))}
    </div>
  )
}

export default createGrid
