import React from 'react'
import Moment from 'react-moment'
import './hike-feed.styles.scss'

const HikeFeedCard = ({ hike, user, profile, handleUpdateClick }) => {

  const update = () => {
    console.log('click')
  }
  console.log(profile)
  return(
    <div className='hike-card'>
    <div className='date-title'>
      <div><h3><Moment format="MM/DD/YYYY">{hike.date}</Moment></h3></div>
      <div><h4>    {
        hike.owner.email === user.email && <div className='click-to-edit' id={hike._id} onClick={handleUpdateClick}>...</div>
      }</h4></div>
    </div>
    {hike.picture && <div className='hike-picture-container'><img className='hike-picture' src={hike.picture}/></div>}
    <div className='hike-information'>
    {
      profile === false && 
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
      {
        hike.mountainsClimbed &&
        <div className="hike-information-row">
          <div className="hike-information-label">
            SUMMITS:
          </div>
          <div className="hike-information-data">
            {hike.mountainsClimbed}
          </div>
        </div>
      }
      {
        hike.distance &&
        <div className="hike-information-row">
          <div className="hike-information-label">
            DISTANCE:
          </div>
          <div className="hike-information-data">
            {hike.distance}
          </div>
        </div>
      }
      {
        hike.elevation &&
        <div className="hike-information-row">
          <div className="hike-information-label">
            ELEVATION GAIN:
          </div>
          <div className="hike-information-data">
            {hike.elevation}
          </div>
        </div>
      }
      {
        hike.timeTaken &&
        <div className="hike-information-row">
          <div className="hike-information-label">
            TIME TAKEN:
          </div>
          <div className="hike-information-data">
            {hike.timeTaken}
          </div>
        </div>
      }
      {
        hike.hikedWith &&
        <div className="hike-information-row">
          <div className="hike-information-label">
            HIKED WITH:
          </div>
          <div className="hike-information-data">
            {hike.hikedWith}
          </div>
        </div>
      }
      {
        hike.trailNotes &&
        <div>
          <div className="hike-information-label">
            TRAIL NOTES:
          </div>
          <div className="hike-information-data">
           {hike.trailNotes}
          </div>
        </div>
      }
    </div>
  </div>
  )
}

export default HikeFeedCard