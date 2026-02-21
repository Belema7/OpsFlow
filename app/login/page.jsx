import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Login Page</h1>
        <form className='flex flex-col items-center justify-center mt-4'>
            <input type="text" placeholder='Username' className='border p-2 m-2' />
            <input type="password" placeholder='Password' className='border p-2 m-2' />
            <button type='submit' className='bg-blue-500 text-white p-2 m-2'>Login</button>

        </form>
        </div>
  )
}

export default LoginPage