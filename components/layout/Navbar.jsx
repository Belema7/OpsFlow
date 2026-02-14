import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import DarkModeSwitch from '../ui/ThemeToggle'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Logo & Brand */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <Logo />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              OpsFlow
            </span>
          </Link>
        </div>

        {/* Right: Navigation & CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 md:flex">
            <Link 
              href="/about" 
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <button className="inline-flex h-9 items-center justify-center rounded-full bg-amber-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-500 hover:shadow-md active:scale-95">
                Get Started
              </button>
            </Link>
          </div>

          <div>
            <DarkModeSwitch/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
