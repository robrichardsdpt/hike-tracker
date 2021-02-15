import React from 'react'
import Washington from '../../../washington.jpeg'
import './../patch-grid.styles.scss'


const WashingtonPatch= ({ mountainsTable }) => {
  return(
    <div className='patch-card'>
    <h2>Mount Washington</h2>
      {mountainsTable['washington'] && <div className='patch-image-container'><img src={Washington} className='patch-image' alt='patch'/></div>}
      {mountainsTable['washington'] && <div>You have hiked Mount Washington.  This is the highest summit in the Northeast!</div>}
    </div>
  )
}

export default WashingtonPatch
