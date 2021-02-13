import React from 'react'
import CreateHike from '../create-hike/create-hike'
import './home.styles.scss'

const Home = ({ user, msgAlerts }) => {
  return (
    <div className='home'>
      <CreateHike user={user} msgAlerts={msgAlerts}/>
    </div>
  )
}

export default Home