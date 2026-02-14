import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className='w-full bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='rounded-lg bg-white p-8 shadow-md'>
          <h1 className='mb-4 text-3xl font-bold text-gray-900'>About OpsFlow</h1>
          <p className='mb-6 text-gray-700'>
            OpsFlow is a modern platform that streamlines operational workflows so teams can focus on work that matters. We combine simple, intuitive UI with powerful automation and analytics to help organizations improve efficiency, reduce friction, and scale operations safely.
          </p>

          <section className='mb-8'>
            <h2 className='mb-2 text-xl font-semibold text-gray-900'>Our Mission</h2>
            <p className='text-gray-700'>To empower teams with tools that make operations predictable, measurable, and easy to manage — so businesses can deliver value faster.</p>
          </section>

          <section className='mb-8'>
            <h2 className='mb-2 text-xl font-semibold text-gray-900'>What We Value</h2>
            <ul className='ml-5 list-disc text-gray-700'>
              <li>Usability — products people enjoy using.</li>
              <li>Reliability — predictable and safe workflows.</li>
              <li>Transparency — clear metrics and insights.</li>
              <li>Collaboration — tools that bring teams together.</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='mb-4 text-xl font-semibold text-gray-900'>Team</h2>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='rounded border border-gray-100 p-4'>
                <p className='font-medium text-gray-900'>Alex Morgan</p>
                <p className='text-sm text-gray-600'>Founder & CEO</p>
              </div>
              <div className='rounded border border-gray-100 p-4'>
                <p className='font-medium text-gray-900'>Priya Singh</p>
                <p className='text-sm text-gray-600'>Head of Product</p>
              </div>
              <div className='rounded border border-gray-100 p-4'>
                <p className='font-medium text-gray-900'>Jordan Lee</p>
                <p className='text-sm text-gray-600'>Engineering Lead</p>
              </div>
            </div>
          </section>

          <div className='mt-6 flex items-center justify-between'>
            <p className='text-sm text-gray-600'>Want to learn how OpsFlow can help your team?</p>
            <Link href='/contact' className='ml-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700'>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage