import React, { useState, useEffect } from 'react'
import PatchGrid from '../patch-grid/patch-grid'
import { hikeTotalDistance, hikeTotalElevation, mountainsClimbedToTable, mountainsTable } from '../../hike-data/hike-data-functions'
import './user-profile.styles.scss'

const UserInfo = ({ user, hikes }) => {
  const [mountainTable, setMountainTable] = useState({})
      
  
  mountainsClimbedToTable(hikes)
  console.log(mountainsTable)
  return(
    <div className='profile-information'>{user.email} <br/>
      You have done {hikes.length} hikes! <br/>
      You have hiked {hikeTotalDistance(hikes)} miles and climbed {hikeTotalElevation(hikes)} feet so far!
    {mountainTable && <PatchGrid mountainsTable={mountainsTable} />}
    </div>
  )
}

export default UserInfo
