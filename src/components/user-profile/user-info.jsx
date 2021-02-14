import React from 'react'
import PatchGrid from '../patch-grid/patch-grid'
import { hikeTotalDistance, hikeTotalElevation, mountainsClimbedToTable } from '../../hike-data/hike-data-functions'
import './user-profile.styles.scss'

const UserInfo = ({ user, hikes }) => {
  const mountainTable = mountainsClimbedToTable(hikes)
  return(
    <div className='profile-information'>{user.email} <br/>
      You have done {hikes.length} hikes! <br/>
      You have hiked {hikeTotalDistance(hikes)} miles and climbed {hikeTotalElevation(hikes)} feet so far!
    <PatchGrid mountainTable={mountainTable} />
    </div>
  )
}

export default UserInfo
