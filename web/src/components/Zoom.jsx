import React, {useState} from 'react'

import Image from 'gatsby-image'

function ImageZoom({ zoom, fluid, src, fixed, alt, background }) {
  const zoomRef = React.useRef(zoom.clone({ background }))
  const [isZomed, setZoom] = useState(false)


  function attachZoom(image) {
    zoomRef.current.attach(image)
  }
  // <Image fluid={fluid} fixed={fixed} alt={alt} ref={attachZoom} />

  return <div>
    <img src={src} alt={alt} ref={attachZoom} />
  </div>
}

export default ImageZoom