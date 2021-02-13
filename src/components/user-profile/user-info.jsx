import React from 'react'
import PatchGrid from '../patch-grid/patch-grid'
import './user-profile.styles.scss'

const UserInfo = ({ user, hikes }) => {
  return(
    <div class='profile-information'>{user.email} <br/>
      You have done {hikes.length} hikes!
    <PatchGrid user={user} />
    </div>
  )
}

export default UserInfo
