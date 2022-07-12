import React from 'react'

import createContentBlock from './createContentBlock'
import createFigure from './createFigure'
import createVideo from './createVideo'

export const createMediaComponent = (component) => {
  switch (component._type) {
    case 'figure':
      return createFigure(component)

    case 'image':
      return createFigure(component)

    case 'video':
      return createVideo(component)

    case 'contentBlock':
      return createContentBlock(component)

    default:
      return <> </>
  }
}

export default createMediaComponent
