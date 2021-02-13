import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import './hike-feed.styles.scss'

const Feed = ({ user }) => {
  const [hikes, setHikes] = useState([])

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
    return(
      <div key={hike._id}><h2>{hike.date}</h2></div>
    )
  })
  return(
    <div>{hikesJsx}</div>
  )
}

export default Feed