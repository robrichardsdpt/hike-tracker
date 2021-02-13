import React from 'react'
import Patch from './patch'
import './patch-grid.styles.scss'

const PatchGrid = ({ user, stats }) => {
  return (
    <div className='patch-grid'><Patch /></div>
  )
}

export default PatchGrid