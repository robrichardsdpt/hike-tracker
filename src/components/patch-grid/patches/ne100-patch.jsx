import React from 'react'
import { listOf100 } from '../../../hike-data/summit-list'
import ProgressChart from '../pie-chart'
import Ne100 from '../../../ne100.jpg'
import './../patch-grid.styles.scss'


const Ne100Patch = ({ mountainsTable }) => {
  const hike100 = listOf100.filter(hike => mountainsTable[hike] >= 1)
  const hikePercentJsx = `${Math.floor(hike100.length/100 * 100)}% completed`
  const hike100Jsx = hike100.length ? `You have hiked ${hike100.length}/100 of the hundred highest in New England!` : 'Get started on your 100!'
  let totalPeaks
  return(
    <div className='patch-card'>
    <h2>NE 100 Highest</h2>
      {hike100.length !== 100 && <ProgressChart hikes={hike100} totalPeaks={totalPeaks=100}/>}
      {hike100.length === 100 && <div className='patch-image-container'><img src={Ne100} className='patch-image' alt='patch'/></div>}
      <div>{hikePercentJsx}</div>
      {hike100Jsx}
    </div>
  )
}

export default Ne100Patch
