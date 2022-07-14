import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export type GooglaMapsProps = {
  style?: React.CSSProperties
  className?: string
  locations: {
    lng: number
    lat: number
  }[]
  mapId?: string
  center?: {
    lng: number
    lat: number
  }
}

const Map = ({
  locations,
  mapId,
  center,
  style,
  className
}: GooglaMapsProps) => {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS || ''}
    >
      <GoogleMap
        id={mapId || 'untitled-map'}
        mapContainerStyle={style}
        zoom={9.5}
        center={center ? center : locations[0]}
      >
        {locations &&
          locations.map((loc) => (
            <Marker position={loc} key={`MapLocation-${loc.lat}-${loc.lng}`} />
          ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
