import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Feature = ({ title, desc }) => (
  <div className='rounded-lg border border-gray-100 p-6'>
    <h3 className='mb-2 text-lg font-semibold text-gray-900'>{title}</h3>
    <p className='text-sm text-gray-600'>{desc}</p>
  </div>
)

const HomePage = () => {
  return (
    <div className='w-full bg-gray-50'>
      <header className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2 lg:items-center'>
          <div>
            <h1 className='text-4xl font-extrabold leading-tight text-gray-900'>
              OpsFlow — Operational workflows, simplified
            </h1>
            <p className='mt-6 max-w-xl text-lg text-gray-600'>
              Automate repetitive tasks, connect tools, and get clear insights so your
              team can move faster with confidence. Built for engineering, ops, and product teams.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <Link href='/signup' className='inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700'>
                Get started
              </Link>
              <Link href='/about' className='inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50'>
                Learn more
              </Link>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-full max-w-md overflow-hidden rounded-lg bg-white shadow-sm'>
              {/* <img src='/assets/hero-image.png' alt='OpsFlow preview' className='h-64 w-full object-cover' /> */}
              <Image src='/hero.jpeg' alt='OpsFlow preview' width={400} height={300} className='h-64 w-full object-cover' />
            </div>
          </div>
        </div>
      </header>

      <main className='mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8'>
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-900'>Why OpsFlow?</h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Feature title='Automations' desc='Create powerful workflow automations without writing custom scripts.' />
            <Feature title='Integrations' desc='Connect the tools your team already uses with minimal setup.' />
            <Feature title='Analytics' desc='Get actionable metrics to measure reliability and performance.' />
          </div>
        </section>

        <section className='rounded-lg bg-gradient-to-r from-white to-indigo-50 p-8'>
          <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
            <div>
              <h3 className='text-xl font-semibold text-gray-900'>Ready to reduce operational overhead?</h3>
              <p className='mt-1 text-sm text-gray-600'>Start a free trial or request a demo to see OpsFlow in action.</p>
            </div>
            <div className='flex gap-3'>
              <Link href='/signup' className='inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700'>Start free</Link>
              <Link href='/contact' className='inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50'>Request demo</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage