import UsersTable from '@/components/dashboard/users/UsersTable';
import React from 'react'

const UsersPage = async () => {
  const res = await fetch('https://dummyjson.com/users')
  if (!res.ok) throw new Error("Failed to fetch users")
  const users = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <UsersTable users={users}/>
      </div>
    </div>
  )
}

export default UsersPage
