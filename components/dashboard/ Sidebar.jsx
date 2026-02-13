'use client' // Required for hooks

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // [1] Import hook
import { ChevronLeft, ChevronRight } from 'lucide-react'
import sidebarItems from './sidebarItems'

const Sidebar = ({ isCollapsed, onCollapse }) => {
  const pathname = usePathname() // [2] Get current path

  return (
    <aside 
      className={`relative flex flex-col bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button 
        onClick={onCollapse}
        className="absolute -right-3 top-10 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white hover:bg-amber-600 transition-colors"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className="flex flex-col gap-2 p-4 mt-12">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          // [3] Check if this link is currently active
          const isActive = pathname === item.href 

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg p-3 transition-all ${
                isActive 
                  ? 'bg-amber-600 text-white shadow-md' // Active styles
                  : 'hover:bg-amber-700 hover:text-white' // Inactive hover
              }`}
              title={isCollapsed ? item.title : ''}
            >
              <Icon size={22} className="shrink-0" />
              <span 
                className={`whitespace-nowrap font-medium transition-all duration-300 ${
                  isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
                }`}
              >
                {item.title}
              </span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
