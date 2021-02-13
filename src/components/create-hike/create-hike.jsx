import React, { useState } from 'react'
import './create-hike.styles.scss'

const CreateHike = ({ user, msgAlerts }) => {
  const [newHike, setNewHike] = useState({})

  const handleChange = (event) => {
    setNewHike({ [event.target.name]: event.target.value })    
  }

  console.log(newHike)
  return (
    <div className='create-hike-container'>
    <form id='create-hike'>
      <h2 className='create-hike-title'>Create a Hike</h2>
      <label className='create-hike-label' for='date'>Date</label>
      <input className='create-hike-input' name='date' id='date' type='date' onChange={handleChange} placeholder='When did you go?'/>
      <label className='create-hike-label' for='trails'>Trails:</label>
      <input className='create-hike-input' name='trails' id='trails' type='text' onChange={handleChange} placeholder='What trail did you hit?'/>
      <label className='create-hike-label' for='distance' >Distance (miles):</label>
      <input className='create-hike-input' name='distance' id='distance' type='number' step='0.1' min='0' onChange={handleChange} placeholder='How far in miles?'/>
      <label className='create-hike-label' for='elevation'>Elevation (in feet):</label>
      <input className='create-hike-input' name='elevation' id='elevation' type='number' step='0.1' min='0' onChange={handleChange} placeholder='How high in feet?'/>
      <label className='create-hike-label' for='timeTaken'>Time taken(HH:MM:SS):</label>
      <input className='create-hike-input' name='timeTaken' id='timeTaken' type='text' onChange={handleChange} placeholder='How long in HH:MM:SS?'/>
      <label className='create-hike-label' for='mountainsClimbed'>Mountains Climbed:</label>
      <input className='create-hike-input' name='mountainsClimbed' id='mountainsClimbed' type='text' onChange={handleChange} placeholder='Which peaks?'/>
      <label className='create-hike-label' for='hikedWith'>Who did you hike with?:</label>
      <input className='create-hike-input' name='hikedWith' type='text' onChange={handleChange} placeholder="Who'd you drag along?"/>
      <label className='create-hike-label' for='trailNotes'>Elevation</label>
      <textarea className='create-hike-input' name='trailNotes' onChange={handleChange} placeholder='Any field notes?'/>
      <button className='create-hike-button'>Create Hike!</button>
    </form>
    </div>
  )
}

export default CreateHike
