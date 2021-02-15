import React, { useState, useEffect } from 'react'
import PatchGrid from '../patch-grid/patch-grid'
import { hikeTotalDistance, hikeTotalElevation, mountainsClimbedToTable, mountainsTable } from '../../hike-data/hike-data-functions'
import './user-profile.styles.scss'

const UserInfo = ({ user, hikes }) => {
  
  mountainsClimbedToTable(hikes)
  const totalDistance = hikeTotalDistance(hikes)
  const totalElevation = hikeTotalElevation(hikes)
  return(
    <div className='profile-information'>{user.email} <br/>
      You have done {hikes.length} hikes! <br/>
      You have hiked {totalDistance} miles and climbed {totalElevation} feet so far!
      {mountainsTable && <PatchGrid mountainsTable={mountainsTable} totalDistance={totalDistance} totalElevation={totalElevation}/>}
    </div>
  )
}

export default UserInfo
