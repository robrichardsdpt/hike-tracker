import React from 'react'
import CreateHike from '../create-hike/create-hike'
import './home.styles.scss'
import Feed from './../hike-feed/hike-feed'

const Home = ({ user, msgAlert }) => {
  return (
    <div className='home'>
      <Feed user={user}/>
    </div>
  )
}

export default Home