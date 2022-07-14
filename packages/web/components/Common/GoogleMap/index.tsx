import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import lightStyles from './lightStyles'

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
        options={{ styles: lightStyles }}
        zoom={8}
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
