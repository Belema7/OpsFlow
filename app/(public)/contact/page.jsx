"use client"

import React, { useState } from 'react'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', msg: 'Please fill in all fields.' })
      return
    }

    // Placeholder: in a real app, send to an API endpoint here.
    console.log('Contact form submitted', { name, email, message })
    setStatus({ type: 'success', msg: "Thanks — we'll get back to you soon." })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='w-full bg-gray-50'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='rounded-lg bg-white p-8 shadow'>
          <h1 className='mb-2 text-2xl font-bold text-gray-900'>Contact Us</h1>
          <p className='mb-6 text-gray-600'>Have a question, feedback, or want a demo? Send us a message and we'll respond within 1-2 business days.</p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='mb-1 block text-sm font-medium text-gray-700'>Name</label>
              <input
                className='mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your name'
                type='text'
                aria-label='Name'
              />
            </div>

            <div>
              <label className='mb-1 block text-sm font-medium text-gray-700'>Email</label>
              <input
                className='mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='you@example.com'
                type='email'
                aria-label='Email'
              />
            </div>

            <div>
              <label className='mb-1 block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                className='mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                placeholder='How can we help?'
                aria-label='Message'
              />
            </div>

            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700'
              >
                Send Message
              </button>

              <div className='text-sm text-gray-600'>
                <p>Email: <a className='text-indigo-600' href='mailto:hello@opsflow.example'>hello@opsflow.example</a></p>
                <p>Phone: <span className='ml-1'>+1 (555) 123-4567</span></p>
              </div>
            </div>
          </form>

          {status && (
            <div className={`mt-4 rounded-md px-4 py-2 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage