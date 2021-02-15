import React, { useState, useEffect } from 'react'
import apiUrl from './../../apiConfig.js'
import HikeFeedCard from '../hike-feed/hike-feed-card'
import UserInfo from './user-info'
import axios from 'axios'
import './user-profile.styles.scss'
import EditModal from '../edit-modal/edit-modal.jsx'

const UserProfile = ({ user }) => {
  const [hikes, setHikes] = useState([])
  const [hikeId, setHikeId] = useState()
  const [show, setShow] = useState(false)

  const handleUpdateClick = (event) => {
    setShow(true)
    setHikeId(event.target.id)
    console.log(event.target.id)
  }
  const handleClose = () => setShow(false) 

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/`,
      method: 'GET',
      params: {
        owner: user._id
      }
    })
    .then((res) => setHikes(res.data.hikes))
  }, [])

  const hikesJsx = hikes.map(hike => {
    return(
      <div key={hike._id}>
      <HikeFeedCard hike={hike} user={user} profile={true} handleUpdateClick={handleUpdateClick}/>
      </div>
    )
  })
  return(
    <div className='profile-container'>
      <div className='profile-info'>
        <UserInfo user={user} hikes={hikes}/>
      </div>
      <div className='hike-grid'>
        {hikesJsx}
      </div>
      <EditModal show={show} handleClose={handleClose} setHikeId={setHikeId} hikeId={hikeId} user={user}/>
    </div>
  )
}

export default UserProfile