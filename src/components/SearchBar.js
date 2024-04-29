import React from 'react'

function SearchBar() {
  return (
    <div className='search-container'>
        <div className='search-bar'>
            <input className='search' placeholder='Search...'/> <i id="searh-icon" className="bx bx-search-alt-2"> </i>
        </div>
    </div>
  )
}

export default SearchBar