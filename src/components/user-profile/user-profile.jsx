import React, { useState, useEffect } from 'react'
import apiUrl from './../../apiConfig.js'
import HikeFeedCard from '../hike-feed/hike-feed-card'
import UserInfo from './user-info'
import axios from 'axios'
import './user-profile.styles.scss'
import EditModal from '../edit-modal/edit-modal.jsx'
import SearchBar from '../search-bar/search-bar.jsx'

const UserProfile = ({ user, handleUserImageChange }) => {
  const [hikes, setHikes] = useState([])
  const [hikeId, setHikeId] = useState()
  const [show, setShow] = useState(false)
  const [searchContents, setSearchContents] = useState('')

  const handleUpdateClick = (event) => {
    setHikeId(event.target.id)
    setShow(true)
    console.log(event.target.id)
  }
  const handleClose = () => setShow(false) 

  const handleSearchContents = (event) => {
    setSearchContents(event.target.value)
  }

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/`,
      method: 'GET',
      params: {
        owner: user._id
      }
    })
    .then((res) => setHikes(res.data.hikes))
  }, [show])

  let searchContentsLowerCase = searchContents.toLowerCase()
  const filterData = hikes.filter(
    (item) =>
      item.mountainsClimbed?.toLowerCase().includes(searchContentsLowerCase) ||
      item.trails.toLowerCase().includes(searchContentsLowerCase) ||
      item.hikedWith?.toLowerCase().includes(searchContentsLowerCase) ||
      item.trailNotes?.toLowerCase().includes(searchContentsLowerCase)
  )

  const hikesJsx = filterData.map(hike => {
    return(
      <div key={hike._id}>
      <HikeFeedCard hike={hike} user={user} profile={true} handleUpdateClick={handleUpdateClick}/>
      </div>
    )
  })
  console.log(user)
  return(
    <div className='profile-container'>
      <div className='profile-info'>
        <UserInfo user={user} hikes={hikes} handleUserImageChange={handleUserImageChange}/>
      </div>
      <div className='search-container'>
        <SearchBar handleSearchContents={handleSearchContents}/>
      </div>
      <div className='hike-grid'>
        {hikesJsx}
      </div>
      {hikeId && <EditModal show={show} handleClose={handleClose} setHikeId={setHikeId} hikeId={hikeId} user={user}/> }
    </div>
  )
}

export default UserProfile