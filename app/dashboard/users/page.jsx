import React from 'react'
import Search from '@/components/ui/dashboard/search/Search'
const UsersPage = () => {
  return (
    <div className='p-4 space-y-4'>
      <Search placeholder="Search users..." />
      <div className='dark:bg-(--color-page) shadow rounded p-4'>
        <h2 className='text-2xl font-bold mb-4'>Users</h2>
        <table className='w-full table-auto'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>ID</th>
              <th className='border px-4 py-2'>Name</th>
              <th className='border px-4 py-2'>Email</th>
              <th className='border px-4 py-2'>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* Example user data */}
            <tr>
              <td className='border px-4 py-2'>1</td>
              <td className='border px-4 py-2'>John Doe</td>
              <td className='border px-4 py-2'>john.doe@example.com</td>
              <td className='border px-4 py-2'>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersPage