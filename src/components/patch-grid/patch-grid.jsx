import React from 'react'
import Nh48Patch from './nh48-patch'
import './patch-grid.styles.scss'

const PatchGrid = ({ mountainsTable }) => {
  console.log(mountainsTable)
  return (
    <div className='patch-grid'>
      <Nh48Patch mountainsTable={mountainsTable} />
    </div>
  )
}

export default PatchGrid