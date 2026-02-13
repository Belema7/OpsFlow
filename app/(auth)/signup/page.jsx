import React from 'react'

const SignupPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <form className='flex flex-col gap-4 p-8 border rounded-lg shadow-md w-full max-w-sm'>
            <h2 className='text-2xl font-bold text-center'>Signup</h2>
            <input type="text" placeholder='Username' className='p-2 border rounded' />
            <input type="email" placeholder='Email' className='p-2 border rounded' />
            <input type="password" placeholder='Password' className='p-2 border rounded' />
            <button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition'>Signup</button>
        </form>
    </div>
  )
}

export default SignupPage