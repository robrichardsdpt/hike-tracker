import React from 'react'
import PatchGrid from '../patch-grid/patch-grid'
import { hikeTotalDistance, hikeTotalElevation } from '../../hike-data/hike-data-functions'
import './user-profile.styles.scss'

const UserInfo = ({ user, hikes }) => {
  return(
    <div className='profile-information'>{user.email} <br/>
      You have done {hikes.length} hikes! <br/>
      You have hiked {hikeTotalDistance(hikes)} miles and climbed {hikeTotalElevation(hikes)} feet so far!
    <PatchGrid user={user} />
    </div>
  )
}

export default UserInfo
