import React from 'react'
import SearchLogo from './SearchLogo.svg'
import './search-bar.styles.scss'

const SearchBar = ({handleSearchContents}) => {
  return(
    <div className='search-bar-container'>
      <img src={SearchLogo}/>
      <input type='text' onChange={handleSearchContents} className='search-input'/>
    </div>
  )
}

export default SearchBar
