import React, { useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap'
import apiUrl from '../../apiConfig.js'
import axios from 'axios'
import './edit-modal.styles.scss'

const EditModal = ({user, hikeId , show, handleClose}) => {
  const [hike, setHike] = useState({})

  const handleChange = (event) => {
    event.persist()
    setHike((prevPost) => {
      const updatedPost = { [event.target.name]: event.target.value }
      const editedPost = Object.assign({}, prevPost, updatedPost)
      return editedPost
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios({
      url: `${apiUrl}/hikes/${hikeId}`,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${user.token}`
      },
      data: { hike }
    })
    .then(() => handleClose())
    .catch((err) => console.error(err))
  }
  
  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/${hikeId}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${user.token}`
      },
    })
    .then((res) => setHike(res.data.hike))
  }, [show])

  console.log(hike)
  return(
    <div >
    <Modal show={show} onHide={handleClose} className='edit-hike-container'>
      <Modal.Header closeButton className='edit-hike-title'>
        <Modal.Title>Edit Hike</Modal.Title>
      </Modal.Header>
      <Modal.Body className='edit-hike-body'>
      <form id='edit-hike' onSubmit={handleSave}>
        <label className='edit-hike-label'>Date:</label>
        <input className='edit-hike-input' name='date' id='date' type='date' onChange={handleChange} value={hike.date}/>
        <label className='edit-hike-label'>Trails:</label>
        <input className='edit-hike-input' name='trails' id='trails' type='text' onChange={handleChange} value={hike.trails}/>
        <label className='edit-hike-label'>Distance (miles):</label>
        <input className='edit-hike-input' name='distance' id='distance' type='number' step='0.1' min='0' onChange={handleChange} value={hike.distance}/>
        <label className='edit-hike-label'>Elevation (in feet):</label>
        <input className='edit-hike-input' name='elevation' id='elevation' type='number' step='0.1' min='0' onChange={handleChange} value={hike.elevation}/>
        <label className='edit-hike-label'>Time taken(HH:MM:SS):</label>
        <input className='edit-hike-input' name='timeTaken' id='timeTaken' type='text' onChange={handleChange} value={hike.timeTaken}/>
        <label className='edit-hike-label'>Mountains Climbed:</label>
        <input className='edit-hike-input' name='mountainsClimbed' id='mountainsClimbed' type='text' onChange={handleChange} value={hike.mountainsClimbed}/>
        <label className='edit-hike-label'>Who did you hike with?:</label>
        <input className='edit-hike-input' name='hikedWith' type='text' onChange={handleChange} value={hike.hikedWith}/>
        <label className='edit-hike-label'>Trail Notes:</label>
        <textarea className='edit-hike-input' name='trailNotes' onChange={handleChange} value={hike.trailNotes}/>
        <input type='submit' className='edit-hike-button' value='Save Changes'/>
      </form>
    </Modal.Body>
  </Modal>
  </div>
  )
}

export default EditModal
