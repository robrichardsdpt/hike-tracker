import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <div>{user.email}</div>
  )
}

export default UserProfile