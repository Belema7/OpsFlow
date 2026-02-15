import React from 'react'

const UsersTable = ({ users }) => {
  return (
    <div className='p-4'>
      <h1>Users Table</h1>
      <p>Number of users: {users.total}</p>
      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>ID</th>
            <th className='border border-gray-300 px-4 py-2'>Name</th>
            <th className='border border-gray-300 px-4 py-2'>Email</th>
            <th className='border border-gray-300 px-4 py-2'>phone</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map((user) => (
            <tr key={user.id}>
              <td className='border border-gray-300 px-4 py-2'>{user.id}</td>
              <td className='border border-gray-300 px-4 py-2'>{user.firstName} {user.lastName}</td>
              <td className='border border-gray-300 px-4 py-2'>{user.email}</td>
              <td className='border border-gray-300 px-4 py-2'>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable




