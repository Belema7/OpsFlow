import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../features/dashboard/pages/Dashboard'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default Routing

