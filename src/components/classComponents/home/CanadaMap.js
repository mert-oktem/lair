import React, { Component } from 'react'
// import './App.css'
import canada from './canada'
import { geoMercator, geoPath } from 'd3-geo'
class CanadaMap extends Component {
   render() {
      const projection = geoMercator()
      const pathGenerator = geoPath().projection(projection)
      const provinces = canada.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='provinces'
         />)
         
   return <svg width={1500} height={1000}>
   {provinces}
   </svg>
   }
}
export default CanadaMap