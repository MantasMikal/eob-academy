import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

import darkStyles from './dark'
import lightStyles from './light'
import { useDarkContext } from 'Context/DarkContext'

const Map = ({ locations, mapId }) => {
  const isDark = useDarkContext()
  return (
    <LoadScript id='script-loader' googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API}>
      <GoogleMap
        id={mapId || 'untitled-map'}
        mapContainerStyle={{
          height: '100%',
          width: '100%'
        }}
        options={{ styles: isDark ? darkStyles : lightStyles }}
        zoom={8}
        center={{
          lat: 51.36537,
          lng: -0.16077
        }}
      >
        {locations &&
          locations.map(loc => {
            const pos = {
              lat: loc.lat,
              lng: loc.lng
            }
            return <Marker position={pos} key={`MapLocation-${pos.lat}-${pos.lng}`} />
          })}
      </GoogleMap>
    </LoadScript>
  )
}
export default Map
