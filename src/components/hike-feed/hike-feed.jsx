import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import HikeFeedCard from './hike-feed-card'
import './hike-feed.styles.scss'

const Feed = ({ user }) => {
  const [hikes, setHikes] = useState([])
  const [hikeId, setHikeId] = useState()

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/`,
      method: 'GET',
      params: {
        owner: 'all'
      }
    })
    .then((res) => setHikes(res.data.hikes))
  }, [])

  const hikesJsx = hikes.map(hike => {
    let profile
    return(
      <div key={hike._id}>
      <HikeFeedCard hike={hike} user={user} profile={profile=false} setHikeId={setHikeId}/>
      </div>
    )
  })
  return(
    <div className='hike-grid'>{hikesJsx}</div>
  )
}

export default Feed