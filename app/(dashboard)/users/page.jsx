import UsersTable from '@/components/dashboard/users/UsersTable';
import React from 'react'

const UsersPage = async () => {
  const res = await fetch('https://dummyjson.com/users')
  const users = await res.json();

   if (!res.ok) throw new Error("Failed to fetch users")

    // console.log(users)
  return (
    <div>
      <UsersTable users={users}/>
    </div>
  )
}

export default UsersPage