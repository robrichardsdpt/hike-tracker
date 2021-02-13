import React, { useState, useEffect } from 'react'
import apiUrl from './../../apiConfig.js'
import HikeFeedCard from '../hike-feed/hike-feed-card'
import axios from 'axios'

const UserProfile = ({ user }) => {
  const [hikes, setHikes] = useState([])

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
      <HikeFeedCard hike={hike}/>
      </div>
    )
  })
  return(
    <div className='hike-grid'>{hikesJsx}</div>
  )
}

export default UserProfile