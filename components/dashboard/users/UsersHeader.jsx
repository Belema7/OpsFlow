import React from 'react'

const UsersHeader = ({users}) => {
  return (
    <div className="flex items-center justify-between h-14 px-6">
        {/* left side: title */}
        <h2 className="text-lg font-semibold">Users</h2>
        {/* right side: add user*/}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add User</button>
        
    </div>
  )
}

export default UsersHeader
