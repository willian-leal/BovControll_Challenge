import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json'

const MapChart = ({ lat, long, city }) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 600
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      <Marker key={city} coordinates={[long, lat]}>
        <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={-15}
          style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
        >
          {city}
        </text>
      </Marker>
    </ComposableMap>
  )
}

export default MapChart
