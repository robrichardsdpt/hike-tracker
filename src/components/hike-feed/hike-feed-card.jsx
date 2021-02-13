import React from 'react'
import './hike-feed.styles.scss'

const HikeFeedCard = ({ hike }) => {
  return(
    <div className='hike-card'>
    <div className='date-title'><h3>{hike.date}</h3></div>
    {hike.picture && <div className='hike-picture-container'></div>}
    <div className='hike-information'>
      <div className="hike-information-row">
        <div className="hike-information-label">
          HIKER:
        </div>
        <div className="hike-information-data">
          {hike.owner.email}
        </div>
      </div>
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