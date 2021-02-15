import React from 'react'
import { Modal } from 'react-bootstrap'
import './edit-modal.styles.scss'


const EditModal = ({hikeId , show, handleClose}) => {
  return(
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <button variant="secondary" onClick={handleClose}>
        Close
      </button>
      <button variant="primary" onClick={handleClose}>
        Save Changes
      </button>
    </Modal.Footer>
  </Modal>
  )
}

export default EditModal
