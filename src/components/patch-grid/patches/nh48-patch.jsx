import React from 'react'
import { listOfNH4k } from '../../../hike-data/summit-list'
import ProgressChart from '../pie-chart'
import NhPatch from '../../../amc4000.gif'
import './../patch-grid.styles.scss'


const Nh48Patch = ({ mountainsTable }) => {
  const hike48 = listOfNH4k.filter(hike => mountainsTable[hike] >= 1)
  console.log(hike48)
  const hike48Jsx = hike48.length ? `You have hiked ${hike48.length}/48 4000 foot mountains in NH's White Mountains!` : 'Get started on your 48!'
  let totalPeaks
  return(
    <div className='patch-card'>
    <h2>NH 48 4k footers</h2>
      {hike48.length !== 48 && <ProgressChart hikes={hike48} totalPeaks={totalPeaks=48}/>}
      {hike48.length === 48 && <div className='patch-image-container'><img src={NhPatch} className='patch-image' alt='patch'/></div>}
      {hike48Jsx}
    </div>
  )
}

export default Nh48Patch