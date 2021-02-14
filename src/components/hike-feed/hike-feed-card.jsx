import userEvent from '@testing-library/user-event'
import React from 'react'
import './hike-feed.styles.scss'

const HikeFeedCard = ({ hike, user, profile }) => {

  const update = () => {
    console.log('click')
  }

  return(
    <div className='hike-card'>
    <div className='date-title'>
      <div><h3>{hike.date}</h3></div>
      <div><h4>    {
        hike.owner.email === user.email && <div className='click-to-edit' onClick={update}>...</div>
      }</h4></div>
    </div>
    {hike.picture && <div className='hike-picture-container'></div>}
    <div className='hike-information'>
    {
      !profile && hike.owner.email !== user.email && 
        <div className="hike-information-row">
          <div className="hike-information-label">
             HIKER:
          </div>
        <div className="hike-information-data">
          {hike.owner.email}
        </div>
      </div>
    }
      <div className="hike-information-row">
        <div className="hike-information-label">
          TRAIL:
        </div>
        <div className="hike-information-data">
          {hike.trails}
        </div>
      </div>
      <div className="hike-information-row">
        <div className="hike-information-label">
          SUMMITS:
        </div>
        <div className="hike-information-data">
          {hike.mountainsClimbed}
        </div>
      </div>
      <div className="hike-information-row">
        <div className="hike-information-label">
          DISTANCE:
        </div>
        <div className="hike-information-data">
          {hike.distance}
        </div>
      </div>
      <div className="hike-information-row">
        <div className="hike-information-label">
          ELEVATION GAIN:
        </div>
        <div className="hike-information-data">
          {hike.elevation}
        </div>
      </div>
      <div className="hike-information-row">
        <div className="hike-information-label">
          TIME TAKEN:
        </div>
        <div className="hike-information-data">
          {hike.timeTaken}
        </div>
      </div>
      <div className="hike-information-row">
        <div className="hike-information-label">
          HIKED WITH:
        </div>
        <div className="hike-information-data">
          {hike.hikedWith}
        </div>
      </div>
      <div>
        <div className="hike-information-label">
          TRAIL NOTES:
        </div>
        <div className="hike-information-data">
          {hike.trailNotes}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HikeFeedCard