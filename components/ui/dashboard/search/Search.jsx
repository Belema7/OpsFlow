import React from 'react'

const Search = ({ placeholder }) => {
  return (
    <div className='mb-4'>
        <input type="text" placeholder={placeholder} className='border p-2 w-full'/>
    </div>
  )
}

export default Search