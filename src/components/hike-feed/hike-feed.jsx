import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import HikeFeedCard from './hike-feed-card'
import EditModal from '../edit-modal/edit-modal'
import './hike-feed.styles.scss'

const Feed = ({ user }) => {
  const [hikes, setHikes] = useState([])
  const [hikeId, setHikeId] = useState()
  const [show, setShow] = useState(false)

  const handleUpdateClick = (event) => {
    setHikeId(event.target.id)
    setShow(true)
    console.log(event.target.id)
  }
  const handleClose = () => setShow(false) 

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/`,
      method: 'GET',
      params: {
        owner: 'all'
      }
    })
    .then((res) => setHikes(res.data.hikes))
  }, [show])

  const hikesJsx = hikes.map(hike => {
    let profile
    return(
      <div key={hike._id}>
      <HikeFeedCard hike={hike} user={user} profile={profile=false} setHikeId={setHikeId} handleUpdateClick={handleUpdateClick}/>
      </div>
    )
  })
  return(
    <div>
      <div className='hike-grid'>{hikesJsx}</div>
      {hikeId && <EditModal show={show} handleClose={handleClose} setHikeId={setHikeId} hikeId={hikeId} user={user}/> }
    </div>
  )
}

export default Feed