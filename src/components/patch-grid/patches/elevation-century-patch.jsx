import React from 'react'
import CenPatch from '../../../ne67.jpg'
import ProgressChart from '../stat-chart'

const ElevationCenturyPatch = ({ totalElevation }) => {
  let total
  return (
    <div className='patch-card'>
    <h2>Elevation Century Patch</h2>
      {totalElevation >= 100000 && <div className='patch-image-container'><img src={CenPatch} className='patch-image' alt='patch'/></div>}
      {totalElevation !== 100000 && <ProgressChart completed={totalElevation} total={total=100000}/>}
      {Math.floor(totalElevation/100000 * 100)}% completed!
      {totalElevation !== 100000 && <div >You have {100000 - totalElevation} feet to go.</div>}
      Keep hiking!
    </div>
  )
}

export default ElevationCenturyPatch