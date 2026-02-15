import React from 'react'

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">User Directory</h1>
          <p className="text-sm text-gray-500">Manage and view all registered users</p>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          Total: {users.total}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">ID</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Name</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Email</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Phone</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.users.map((user) => (
              <tr key={user.id} className="hover:bg-blue-50/50 transition-colors group">
                <td className="px-6 py-4 text-sm text-gray-500 font-mono">#{user.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 italic">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable
