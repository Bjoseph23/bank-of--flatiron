import React from 'react'

function SearchBar({
  searchTerm,
  handleClick,
  handleChange,
}){
  return (
    <div className='search-container'>
        <div className='search-bar'>
            <input className='search' value={searchTerm} onChange={handleChange} placeholder='Search by D'/> <i id="searh-icon" className="bx bx-search-alt-2"  onClick={handleClick}> </i>
        </div>
    </div>
  )
}

export default SearchBar