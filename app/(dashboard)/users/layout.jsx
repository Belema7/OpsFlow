import UsersHeader from '@/components/dashboard/users/UsersHeader'
import Link from 'next/link'
import React from 'react'

const UsersLayout =  ({children}) => {

  return (
    <div >
        <UsersHeader />
        {children}
    </div>
  )
}

export default UsersLayout


