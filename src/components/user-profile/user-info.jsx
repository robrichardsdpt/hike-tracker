import React from 'react'
import PatchGrid from '../patch-grid/patch-grid'

const UserInfo = ({ user }) => {
  return(
    <div class='profile-information'>{user.email}
    <PatchGrid user={user} />
    </div>
  )
}

export default UserInfo
