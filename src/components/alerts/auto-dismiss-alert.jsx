import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

import './auto-dismiss-alert.scss'

const AutoDismissAlert = ({ variant, heading, message }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setInterval(() => {
      return setShow(false)
    }, 3000)
  }, [])

  const handleClose = () => setShow(false)
  return (
    <Alert
      dismissible
      show={show}
      variant={variant}
      onClose={handleClose}
    >
      <div className="container">
        <Alert.Heading>
          {heading}
        </Alert.Heading>
        <p className="alert-body">{message}</p>
      </div>
    </Alert>
  )
}

export default AutoDismissAlert
