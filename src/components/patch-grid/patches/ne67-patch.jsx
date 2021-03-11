import React from 'react'
import { listOfNE4k } from '../../../hike-data/summit-list'
import ProgressChart from '../pie-chart'
import NePatch from '../../../ne67.jpg'
import './../patch-grid.styles.scss'


const Ne67Patch = ({ mountainsTable }) => {
  const hike67 = listOfNE4k.filter(hike => mountainsTable[hike] >= 1)
  const hikePercentJsx = `${Math.floor(hike67.length/67 * 100)}% completed`
  const hike67Jsx = hike67.length ? `You have hiked ${hike67.length}/67 4000 foot mountains in New England!` : 'Get started on your 67!'
  let totalPeaks
  return(
    <div className='patch-card'>
    <h2>NE 67 4k footers</h2>
      {hike67.length !== 67 && <ProgressChart hikes={hike67} totalPeaks={totalPeaks=67}/>}
      {hike67.length === 67 && <div className='patch-image-container'><img src={NePatch} className='patch-image' alt='patch'/></div>}
      <div>{hikePercentJsx}</div>
      {hike67Jsx}
    </div>
  )
}

export default Ne67Patch
