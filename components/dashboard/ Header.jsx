'use client'
import { useState } from 'react'
import sidebarItem from './sidebarItems'
import { usePathname } from 'next/navigation'
import moment from 'moment'
import ThemeToggle from '../ui/ThemeToggle'

const Header = () => {
  const pathname = usePathname()

  const firstSegment = pathname.split('/').filter(Boolean)[0];
  const currentItem = sidebarItem.find(item => item.segment === firstSegment);
  const displayTitle = currentItem ? currentItem.title : "Dashboard";

  return (
    <div className="flex items-center justify-between h-14 px-6 border-b">
      {/* left side: title */}
      <div className="font-semibold capitalize">
        {displayTitle}
      </div>


      {/* right side: time, theme toggle, profile */}
      <div className="flex items-center gap-4">
        {/* time */}
        <div className="text-sm text-slate-500">
          {moment().format('MMMM Do YYYY, h:mm:ss A')}
        </div>

        {/* theme toggle */}
        <ThemeToggle />

        {/* profile */}
        <div className="w-8 h-8 rounded-full bg-slate-300" />
      </div>
    </div>
  )
}

export default Header
