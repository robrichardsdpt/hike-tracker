import React from 'react'
import Nh48Patch from './patches/nh48-patch'
import Ne67Patch from './patches/ne67-patch'
import WashingtonPatch from './patches/washington-patch'
import './patch-grid.styles.scss'
import CenturyPatch from './patches/century-patch'
import ElevationCenturyPatch from './patches/elevation-century-patch'

const PatchGrid = ({ mountainsTable, totalDistance, totalElevation }) => {
  console.log(mountainsTable)
  return (
    <div className='patch-grid'>
      <Nh48Patch mountainsTable={mountainsTable} />
      <Ne67Patch mountainsTable={mountainsTable} />
      {mountainsTable['washington'] ? <WashingtonPatch mountainsTable= {mountainsTable} /> : ''}
      <CenturyPatch totalDistance ={totalDistance}/>
      <ElevationCenturyPatch totalElevation={totalElevation}/>
    </div>
  )
}

export default PatchGrid