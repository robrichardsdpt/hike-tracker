import React, { useState, useEffect } from 'react'
import PatchGrid from '../patch-grid/patch-grid'
import { hikeTotalDistance, hikeTotalElevation, mountainsClimbedToTable, mountainsTable } from '../../hike-data/hike-data-functions'
import './user-profile.styles.scss'
import NoPhoto from './no-photo-avail.jpg'
import UserModal from './user-image-modal'

const UserInfo = ({ user, hikes, handleUserImageChange }) => {
  const [show, setShow] = useState(false)
  
  const handleImageClick = () => setShow(true)
  
  const handleClose = () => setShow(false)

  mountainsClimbedToTable(hikes)
  const totalDistance = hikeTotalDistance(hikes)
  const totalElevation = hikeTotalElevation(hikes)
  console.log(user)
  return(
    <div className='profile-information'>
      <div className='image-click' onClick={handleImageClick}>
      {user.profileImage ? <div className='image-container'><img src={user.profileImage} className='profile-image'/></div> : <div className='image-container'><img src={NoPhoto} className='profile-image'/></div>}
      </div>
      <h3>{user.email}</h3>
      <h4>Hikes logged: {hikes.length}</h4>
      <h4>Total distance: {totalDistance} miles </h4>
      <h4>Total distance climbed: {totalElevation} feet</h4>
      {mountainsTable && <PatchGrid mountainsTable={mountainsTable} totalDistance={totalDistance} totalElevation={totalElevation}/>}
      <UserModal show={show} handleClose={handleClose} user={user} handleUserImageChange={handleUserImageChange}/>
    </div>
  )
}

export default UserInfo
